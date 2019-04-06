import React, { Component } from "react";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Teams from "./components/Teams";
import Chat from "./components/Chat";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/*<main className="main-auth">
          <Teams />
          <Chat />
        </main> */}
        <main className="main-guest">
          <Welcome />
        </main>
      </div>
    );
  }
}

export default App;
