import React, { Component } from "react";
import "./css/DetailHeader.css";

class DetailHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="detail-container">
                <div className="detail-heading">News For You</div>
                <div className="detail-subheading">
                  At the speed the tech world is evolving keeping up to date
                  with it can prove to be hard and we are here to help you. Just
                  let us know what domains interest you the most and we'll send
                  you trending news about it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailHeader;
