import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import firebase from "firebase";

import Header from "./components/Header";
import DetailHeader from "./components/DetailHeader";
import Signup from "./components/Signup";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

import { DOMAINS } from "./suggestions";

const config = {
  apiKey: "AIzaSyBL6LDmX6fuIy5d35iq15jz9fW-AnwtwDI",
  authDomain: "community-updates.firebaseapp.com",
  projectId: "community-updates"
};

firebase.initializeApp(config);
var db = firebase.firestore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [],
      showError: false,
      isSignedIn: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.get_user = this.get_user.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag], showError: false }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { tags } = this.state;

    if (tags.length === 0) {
      this.setState({ showError: true });
    } else {
      let tags_list = [];

      tags.forEach(domain => {
        tags_list.push(domain.text);
      });

      db.collection("users")
        .doc(firebase.auth().currentUser.email)
        .set({
          name: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          newsKeywords: tags_list
        });

      alert("Signed Up Successfully!");

      window.location.href = process.env.PUBLIC_URL + "#/";
    }
  }

  get_user(email) {
    var docRef = db.collection("users").doc(email);

    this.setState({ tags: [] });

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          let data = doc.data();
          data.newsKeywords.forEach(domain => {
            let temp = {
              id: domain,
              text: domain
            };
            this.setState(state => ({ tags: [...state.tags, temp] }));
          });
        } else {
          db.collection("users")
            .doc(email)
            .set({
              name: firebase.auth().currentUser.displayName,
              email: firebase.auth().currentUser.email,
              newsKeywords: []
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    DOMAINS.forEach(domain => {
      let temp = {
        id: domain,
        text: domain
      };
      this.setState(state => ({ suggestions: [...state.suggestions, temp] }));
    });

    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {this.state.isSignedIn ? (
          <React.Fragment>
            <Header />
            <Route
              exact
              path="/"
              render={props => <Home get_user={this.get_user} />}
            />
            <Route
              path="/signup"
              render={props => (
                <React.Fragment>
                  <DetailHeader />
                  <Signup
                    tags={this.state.tags}
                    suggestions={this.state.suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleSubmit={this.handleSubmit}
                    showError={this.state.showError}
                    get_user={this.get_user}
                  />
                </React.Fragment>
              )}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Header />
            <SignIn />
          </React.Fragment>
        )}
      </Router>
    );
  }
}

export default App;
