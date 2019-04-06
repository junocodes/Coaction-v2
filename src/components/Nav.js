import React from "react";
import { FaBolt } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="wrapper">
      <div className="content">
        <span>
          <h1>
            Coaction
            <span>
              <FaBolt />
            </span>
          </h1>
        </span>
        <div className="user">
          <p>Hello, John Doe!</p>
          <img src="http://placehold.it/400x400.jpg" alt="John Doe" />
          <button>Sign Out</button>
        </div>
      </div>
    </nav>
  );
}

/*
    Component Overview: 
    If user is signed in =>
      1. This component should display the authenticated user's username and image.
      2. The user should have an option to sign out. 
    Else: 
      1. Component should only display logo and option to sign-in. 
*/
