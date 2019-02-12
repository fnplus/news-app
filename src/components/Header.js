import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div>
                <a style={headerStyle} href="#/">
                  FNPLUS TECH
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const headerStyle = {
  fontSize: "24px",
  fontFamily: "'Montserrat', sans-serif",
  letterSpacing: "10px",
  fontWeight: "700",
  color: "#000",
  display: "block",
  textDecoration: "none",
  paddingTop: "40px"
};

export default Header;
