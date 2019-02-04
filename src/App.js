import React, { Component } from 'react';
import Header from './components/Header';
import SignUp from './components/SignUp/Signup';
import DetailHeader from './components/SignUp/DetailHeader';

class App extends Component {

  state = {
    choices: [
      {
        id: 1,
        tag: 'Javascript',
        checked: false
      },
      {
        id: 2,
        tag: 'Python',
        checked: false
      },
      {
        id: 3,
        tag: 'Web Development',
        checked: false
      },
      {
        id: 4,
        tag: 'Machine Learning',
        checked: false
      },
      {
        id: 5,
        tag: 'Linux',
        checked: false
      },
      {
        id: 6,
        tag: 'Android',
        checked: false
      },
      {
        id: 7,
        tag: 'Ruby',
        checked: false
      },
      {
        id: 8,
        tag: 'Go',
        checked: false
      },
    ],
    subscribeToAll: false
  }

  setChecked = (id) => {
    this.setState({
      choices: this.state.choices.map(choice => {
        if (choice.id === id) {
          choice.checked = !choice.checked
        }
        return choice;
      })
    });
  }

  setSubscribeAll = () => {
    this.setState({
      subscribeToAll: !this.state.subscribeToAll,
      choices: this.state.choices.map(choice => {
        choice.checked = !this.state.subscribeToAll;
        return choice;
      })
    })
  };


  render() {
    return (
      <React.Fragment>
        <Header />

        <DetailHeader />
        <SignUp choices={this.state.choices} subscribeToAll={this.state.subscribeToAll} setSubscribeAll={this.setSubscribeAll} setChecked={this.setChecked} />
        )}

        </React.Fragment>

    );
  }
}

export default App;
