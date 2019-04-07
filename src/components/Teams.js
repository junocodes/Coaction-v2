import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      isCreatingTeam: false,
      value: ""
    };

    // Creating reference for Firebase data.
    this.teamsRef = this.props.firebase.database().ref("teams");

    // Binding form values for team creation.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCreatingTeamToggle() {
    // Toggling visibility for creating team form.
    this.setState({
      isCreatingTeam: !this.state.isCreatingTeam
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });

    // Verify state is updating in console
    // console.log(this.state.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Define and push new team to firebase.
    let newTeam = this.state.value;
    this.teamsRef.push({
      name: newTeam
    });

    // Clearing form input and toggle back to original view.
    this.setState({ value: "" });
    this.handleCreatingTeamToggle();
  }

  componentDidMount() {
    this.teamsRef.on("child_added", snapshot => {
      // Destructuring for readibility.
      const { teams } = this.state;

      // Sync Firebase data to state.
      const team = snapshot.val();
      team.key = snapshot.key;
      this.setState({
        teams: teams.concat(team)
      });

      // Reference returned Firebase teams as table.
      // console.table(teams);
    });
  }

  render() {
    return (
      <>
        <div className="teams">
          <h3>Team Boards</h3>
          <ul>
            {this.state.teams.map(team => {
              return (
                <li
                  key={team.key}
                  onClick={() => this.props.setActiveTeam(team)}
                >
                  {team.name}
                </li>
              );
            })}
          </ul>
          {this.props.user !== null && (
            <div className="create-team-action">
              <FaPlus onClick={() => this.handleCreatingTeamToggle()} />
            </div>
          )}

          {this.state.isCreatingTeam && (
            <div className="create-team-form">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Name of team"
                />
                <button>Create Team</button>
              </form>
              <small onClick={() => this.handleCreatingTeamToggle()}>
                Cancel
              </small>
            </div>
          )}
        </div>
      </>
    );
  }
}

/*
    Component Overview:
      1. This component should only display is user is authenticated and signed in. 
      2. This component should list all active team channels. 
      3. The user should have an option to create a team. 
      4. Event on plus icon (+) should toggle form visibility. 
      5. User should be able to switch the active team (chat) by clicking on the team name. 
*/
