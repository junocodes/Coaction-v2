import React, { Component } from "react";
import { FaBolt } from "react-icons/fa";

export default class Nav extends Component {
  render() {
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
            {this.props.user ? (
              <>
                <p>Hello, {this.props.user.displayName}!</p>
                <img
                  src={this.props.user.photoURL}
                  alt={this.props.user.displayName}
                />
                <button onClick={() => this.props.signOut()}>Sign Out</button>
              </>
            ) : (
              <>
                <p>Hello, Guest!</p>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

/*
    Component Overview: 
    If user is signed in =>
      1. This component should display the authenticated user's username and image.
      2. The user should have an option to sign out. 
    Else: 
      1. Component should only display logo and greeting to the guest.
*/
