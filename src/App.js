import React, { Component } from "react";
import * as firebase from "firebase";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Teams from "./components/Teams";
import Chat from "./components/Chat";
//import Welcome from "./components/Welcome";

// Initializing Firebase's realtime database.
var config = {
  apiKey: "AIzaSyCFf7aVJtapvJ8uZaYC1WfyuCt9SHQL9i0",
  authDomain: "coaction-db.firebaseapp.com",
  databaseURL: "https://coaction-db.firebaseio.com",
  projectId: "coaction-db",
  storageBucket: "coaction-db.appspot.com",
  messagingSenderId: "38505436483"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTeam: null, user: null };
  }

  // Set active team board (conversation).
  setActiveTeam(team) {
    this.setState({ activeTeam: team });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <main className="main-auth">
          <Teams
            firebase={firebase}
            setActiveTeam={this.setActiveTeam.bind(this)}
          />
          <Chat firebase={firebase} activeTeam={this.state.activeTeam} />
        </main>
        {/* <main className="main-guest">
          <Welcome />
        </main> */}
      </div>
    );
  }
}

export default App;
