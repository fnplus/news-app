import React, { Component } from 'react';
import Header from './components/Header';
import SignUp from './components/SignUp/Signup';
import DetailHeader from './components/SignUp/DetailHeader';


class App extends Component {

  state = {
    choices: ['lorem', 'ipsum', 'dolor', 'quisquam', 'consectetur', 'adipisci', 'velit']
  }

  render() {
    return (
      <React.Fragment>

        <Header />

        <DetailHeader />
        <SignUp choices={this.state.choices} />

      </React.Fragment>
    );
  }
}

export default App;
