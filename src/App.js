import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import firebase from "firebase";
// import { messaging } from "./init-fcm";

import Header from "./components/Header";
import DetailHeader from "./components/DetailHeader";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";

import { DOMAINS } from "./suggestions";

const config = {
  appId: "1:38226611639:web:f4eb0e1549522cc9",
  apiKey: "AIzaSyBL6LDmX6fuIy5d35iq15jz9fW-AnwtwDI",
  authDomain: "community-updates.firebaseapp.com",
  projectId: "community-updates",
  messagingSenderId: "38226611639"
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
      isSignedIn: false,
      token: ""
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
          newsKeywords: tags_list,
          token: this.state.token
        });

      alert("Signed Up Successfully!");
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
              newsKeywords: [],
              token: ""
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

    // FCM Setup --- Ask for notification permission
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(
      "BMXXuXuiGgtBPLsOlj9O8Xeg-D53bZ4xc38saTUWGCQfFnBxhEyhwU3SWxAYxp9KB_Ck8MHMeBPvb5HE9fVfuqg"
    );
    messaging
      .requestPermission()
      .then(async function () {
        console.log("Notification Permission Granted!");
        const token = await messaging.getToken();
        // TODO: Remove console print in production build
        console.log("Token: " + token);
        return token;
      })
      .then(token => {
        this.setState({ token: token });
      })
      .catch(err => {
        console.log("Notification Permission Denied");
      });

    const renderNotification = (notification, i) => <li key={i}>{notification}</li>;

    const registerPushListener = pushNotification =>
      navigator.serviceWorker.addEventListener("message", ({ data }) =>
        pushNotification(
          data.data
            ? data.data.message
            : data["firebase-messaging-msg-data"].data.message
        )
      );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {this.state.isSignedIn ? (
          <React.Fragment>
            <Header navbar={true} />
            <Route
              path="/"
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
              <Header navbar={false} />
              <SignIn />
            </React.Fragment>
          )}
      </Router>
    );
  }
}

export default App;
