import React, { Component } from "react";
import * as firebase from "firebase";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Teams from "./components/Teams";
import Chat from "./components/Chat";
import Welcome from "./components/Welcome";

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

  setActiveTeam(team) {
    // Set active team board (conversation).
    this.setState({
      activeTeam: team
    });
  }

  setUser(user) {
    // Set user after authentication
    this.setState({ user: user });
  }

  signIn() {
    // Call Firebase sign in method
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  signOut() {
    // Call Firebase sign out method
    firebase.auth().signOut();
  }

  componentDidMount() {
    // Event handler for handling change in auth state.
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user);
    });
  }

  render() {
    return (
      <div className="App">
        <Nav user={this.state.user} signOut={this.signOut.bind(this)} />
        {this.state.user === null && (
          <main className="main-guest">
            <Welcome signIn={this.signIn.bind(this)} />
          </main>
        )}
        {this.state.user !== null && (
          <main className="main-auth">
            <Teams
              firebase={firebase}
              setActiveTeam={this.setActiveTeam.bind(this)}
            />
            <Chat
              firebase={firebase}
              activeTeam={this.state.activeTeam}
              user={this.state.user}
            />
          </main>
        )}
      </div>
    );
  }
}

export default App;
