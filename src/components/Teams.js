import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Teams() {
  return (
    <div className="teams">
      <h3>Team Boards</h3>
      <ul>
        <li>Design</li>
        <li>Marketing</li>
        <li>Engineering</li>
      </ul>
      <div className="create-team-action">
        <FaPlus />
      </div>
      <div className="create-team-form">
        <form>
          <input type="text" placeholder="name of team" />
          <button>Create Team</button>
        </form>
      </div>
    </div>
  );
}

/*
    Component Overview:
      1. This component should only display is user is authenticated and signed in. 
      2. This component should list all active team channels. 
      3. The user should have an option to create a team. 
      4. Event on plus icon (+) should toggle form visibility. 
*/
