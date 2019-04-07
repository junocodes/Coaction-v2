import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <span>
          <h2>Welcome to Coaction</h2>
          <p>
            A fictitious chat environment where teams can collaborate with each
            other. This application was built as part of my coursework for Bloc
            using React, Firebase, and SASS.
            <p>To view or join in the conversations, you'll need to sign in.</p>
          </p>
        </span>
      </div>
    );
  }
}

/*
    Component Overview:
      1. This component should only display if a user is not authenticated or signed in.
*/
