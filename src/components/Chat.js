import React, { Component } from "react";

export default class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <header>
          {this.props.activeTeam !== null ? (
            <h3>{this.props.activeTeam.name}</h3>
          ) : (
            <h3>Please select a team</h3>
          )}
        </header>
        <div className="messages">
          <ul>
            <li>
              <div>
                <strong>Username</strong>
                Here is the message that the user typed.
              </div>
              <div>
                <span>
                  <small>10:30pm</small>
                </span>
                <span className="remove">
                  <small>X</small>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <form>
          <input type="textarea" placeholder="Add your message . . ." />
          <button>Send</button>
        </form>
      </div>
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
