import React, { Component } from "react";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import Header from "./components/Header";
import DetailHeader from "./components/DetailHeader";
import Signup from "./components/Signup";

import { DOMAINS } from "./suggestions";

import { Config } from "./firebase-config";

var config = Config;
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [],
      showError: false,
      isSignedIn: false
    };
    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: () => false
      }
    };

    this.componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user });
      });
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    }
  }

  componentDidMount() {
    DOMAINS.forEach(domain => {
      let temp = {
        id: domain,
        text: domain
      };
      this.setState(state => ({ suggestions: [...state.suggestions, temp] }));
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isSignedIn ? (
          <React.Fragment>
            <Header />
            <DetailHeader />
            <Signup
              tags={this.state.tags}
              suggestions={this.state.suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleSubmit={this.handleSubmit}
              showError={this.state.showError}
            />
          </React.Fragment>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
