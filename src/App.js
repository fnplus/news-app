import React, { Component } from 'react';
import Header from './components/Header';
import DetailHeader from './components/SignUp/DetailHeader';

class App extends Component {

  state = {

  }


  render() {
    return (
      <React.Fragment>
        <Header />

        <DetailHeader />

      </React.Fragment>

    );
  }
}

export default App;
