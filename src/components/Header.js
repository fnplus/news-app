import React, { Component } from "react";

import firebase from "firebase";

import "./css/header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container header-container">
          <div className="row">
            <div className="col-10">
              <a href="/#/" className="header-logo">
                FNPLUS TECH
              </a>
            </div>
            <div className="col-2">
              {this.props.navbar ? (
                <div className="dropdown">
                  <img
                    src={process.env.PUBLIC_URL + "/images/menu.png"}
                    alt="nav"
                    className="dropbtn"
                  />
                  <div className="dropdown-content">
                    <a href="/#/">Home</a>
                    <a href="/#/signup">SignUp</a>
                    <a href="/" onClick={() => firebase.auth().signOut()}>
                      SignOut
                    </a>
                  </div>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
