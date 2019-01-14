import React, { Component } from 'react';
import Header from './components/Header';
import SignUp from './components/SignUp/Signup';
import DetailHeader from './components/SignUp/DetailHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  state = {
    choices: ['lorem', 'ipsum', 'dolor', 'quisquam', 'consectetur', 'adipisci', 'velit']
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />

          <Route exact path='/' render={props => (
            <h1 style={{ textAlign: "center", paddingTop: "30px" }}>Home</h1>
          )} />

          <Route exact path='/signup' render={props => (
            <React.Fragment>
              <DetailHeader />
              <SignUp choices={this.state.choices} />
            </React.Fragment>
          )} />

        </React.Fragment>

      </Router>
    );
  }
}

export default App;
