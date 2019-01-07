import React, { Component } from 'react';
import Header from './components/Header';
import SignUp from './components/Signup';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="row">
            <div className="col-md-12">
              <Header />
            </div>
          </div>
        </div>

        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="row">
            <div className="col-md-12">
              <SignUp />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
