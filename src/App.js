import React, { Component } from "react";
import "./styles/app.scss";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Testing Hero Font</h1>
        <p>Starting with a blank slate and testing plain text.</p>
      </div>
    );
  }
}

export default App;
