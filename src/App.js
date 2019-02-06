import React, { Component } from 'react';

import Header from './components/Header';
import DetailHeader from './components/DetailHeader';
import Signup from './components/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [
        { id: '1', text: 'Javascript' },
        { id: '2', text: 'Python' },
        { id: '3', text: 'IOT' },
        { id: '4', text: 'Machine Learning' },
        { id: '5', text: 'Web Development' },
        { id: '6', text: 'Linux' },
        { id: '7', text: 'Android' },
        { id: '8', text: 'Ruby' },
        { id: '9', text: 'Go' },
        { id: '10', text: 'Android Development' },
        { id: '11', text: 'React JS' },
        { id: '12', text: 'Vue Js' },
        { id: '13', text: 'AI' },
        { id: '14', text: 'Node JS' },
        { id: '15', text: 'Git' },
        { id: '16', text: 'Open Source' },
        { id: '17', text: 'Cryptography' },
      ],
      showError: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag], showError: false }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { tags } = this.state;

    if (tags.length === 0) {
      this.setState({ showError: true })
    }
  }

  render() {
    return (
      <React.Fragment>

        <Header />

        <DetailHeader />

        <Signup tags={this.state.tags} suggestions={this.state.suggestions}
          handleDelete={this.handleDelete} handleAddition={this.handleAddition}
          handleSubmit={this.handleSubmit} showError={this.state.showError} />

      </React.Fragment>

    );
  }
}

export default App;
