import React, { Component } from "react";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import "./css/signin.css";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => true
  }
};
class SignIn extends Component {
  render() {
    return (
      <div className="container signin-container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={process.env.PUBLIC_URL + "/images/signin-bg.jpg"}
              alt="signin-background"
              className="img-responsive signin-img"
            />
          </div>
          <div className="col-lg-6 signin-text-container">
            <div className="signin-text">
              <h2>Join the Community!</h2>

              <div className="signin-btn">
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
