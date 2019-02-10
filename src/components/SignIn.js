import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div>
        <img
          style={{
            height: "200px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
          alt="logo"
          src={process.env.PUBLIC_URL + "/images/logo.png"}
        />
      </div>
    );
  }
}

export default SignIn;
