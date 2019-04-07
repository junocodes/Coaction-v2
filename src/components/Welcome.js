import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h2>Welcome to Coaction</h2>
        <p>
          A fictitious chat environment where teams can collaborate with each
          other. This application was built as part of my coursework for Bloc
          using React, Firebase, and SASS. Ready to get started?
        </p>
        <button onClick={() => this.props.signIn()}>Sign In</button>
      </div>
    );
  }
}

/*
    Component Overview:
      1. This component should only display if a user is not authenticated or signed in.
      2. It should have an option for users to sign in. 
*/
