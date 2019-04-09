import React, { Component } from "react";
import Welcome from "./Welcome";
import moment from "moment";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], message: "" };

    // Creating reference for Firebase data.
    this.messagesRef = this.props.firebase.database().ref("messages");

    // Binding form values for team creation.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ message: e.target.value });

    // Verify state is updating in console
    console.log(this.state.message);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Define and push new message to firebase.
    let newMessage = this.state.message;
    this.messagesRef.push({
      content: newMessage,
      sentAt: Math.round(new Date().getTime() / 1000),
      teamId: this.props.activeTeam.key,
      username: this.props.user.displayName
    });

    // Clear message input after submission.
    this.setState({ message: "" });
  }

  removeMessage(message) {
    this.messagesRef.child(message).remove();
  }

  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {
      // Destructuring for readibility.
      const { messages } = this.state;

      // Sync Firebase data to state.
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({
        messages: messages.concat(message)
      });

      this.messagesRef.on("child_removed", snapshot => {
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].key === snapshot.key) {
            messages.splice(i, 1);
          }
        }

        this.setState({
          messages: messages
        });
      });
      // Reference returned Firebase messages as table.
      // console.table(messages);
    });
  }
  render() {
    return (
      <>
        {this.props.user === null && <Welcome />}
        {this.props.user !== null && (
          <div className="chat">
            <header>
              {this.props.activeTeam !== null ? (
                <h3>{this.props.activeTeam.name}</h3>
              ) : (
                <h3>Please select a team</h3>
              )}
            </header>
            <div className="messages">
              {this.props.activeTeam === null && ""}
              {this.props.activeTeam !== null && (
                <ul>
                  {this.state.messages
                    .filter(
                      message => message.teamId === this.props.activeTeam.key
                    )
                    .map(message => {
                      return (
                        <li key={message.key}>
                          <div>
                            <strong>{message.username}</strong>
                            {message.content}
                          </div>
                          <div>
                            <span>
                              <small>
                                {moment.unix(message.sentAt).format("h:mm A")}
                              </small>
                            </span>
                            {message.username ===
                              this.props.user.displayName && (
                              <span
                                className="remove"
                                onClick={() => this.removeMessage(message.key)}
                              >
                                <small>X</small>
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="textarea"
                value={this.state.message}
                onChange={this.handleChange}
              />
              <button>Submit</button>
            </form>
          </div>
        )}
      </>
    );
  }
}

/*
    Component Overview:
      1. This component should only display is user is authenticated and signed in.
      2. Component should display the name of the active team (chat). 
      3. User should be able to read all of the chat messages associated with the active team.
      4. Messages should display the name of the user, the time message was sent, and the message.
      5. User should be able to send their own messages. 
      6. User should be able to delete their own messages. 
*/
