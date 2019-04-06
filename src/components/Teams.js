import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };

    // Creating reference for Firebase data.
    this.teamsRef = this.props.firebase.database().ref("teams");
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
      console.table(teams);
    });
  }

  render() {
    return (
      <div className="teams">
        <h3>Team Boards</h3>
        <ul>
          {this.state.teams.map(team => {
            return <li key={team.key}>{team.name}</li>;
          })}
        </ul>
        <div className="create-team-action">
          <FaPlus />
        </div>
        <div className="create-team-form">
          <form>
            <input type="text" placeholder="Name of team" />
            <button>Create Team</button>
          </form>
        </div>
      </div>
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
