import React, { Component } from 'react';
import Header from './components/Header';
import SignUp from './components/SignUp/Signup';
import DetailHeader from './components/SignUp/DetailHeader';

class App extends Component {

  state = {
    choices: [
      {
        id: 1,
        tag: 'Javascript'
      },
      {
        id: 2,
        tag: 'Python'
      },
      {
        id: 3,
        tag: 'Web Development'
      },
      {
        id: 4,
        tag: 'Machine Learning'
      },
      {
        id: 5,
        tag: 'Linux'
      },
      {
        id: 6,
        tag: 'Android'
      },
      {
        id: 7,
        tag: 'Ruby'
      },
      {
        id: 8,
        tag: 'Go'
      },
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <DetailHeader />
        <SignUp choices={this.state.choices} />
        )}

        </React.Fragment>

    );
  }
}

export default App;
