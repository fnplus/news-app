import React, { Component } from 'react';
import Header from './components/Header';
import SignUp from './components/Signup';
import DetailHeader from './components/DetailHeader';


class App extends Component {

  state = {
    choices: ['lorem', 'ipsum', 'dolor', 'quisquam', 'consectetur', 'adipisci', 'velit']
  }

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
              <DetailHeader />
            </div>
          </div>
        </div>

        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="row">
            <div className="col-md-12">
              <SignUp choices={this.state.choices} />
            </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default App;
