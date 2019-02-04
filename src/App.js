import React, { Component } from 'react';
import Header from './components/Header';
import DetailHeader from './components/SignUp/DetailHeader';

import { WithContext as ReactTags } from 'react-tag-input';

import './tags.css'

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

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
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    this.setState({ tags: newTags });
  }


  render() {
    const { tags, suggestions } = this.state;
    let placeholder = "Choose a Keyword";
    return (
      <React.Fragment>
        <Header />

        <DetailHeader />

        <div className="reacttag-container container">
          <ReactTags tags={tags}
            placeholder={placeholder}
            suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            delimiters={delimiters}
            inline={false} />
        </div>

      </React.Fragment>

    );
  }
}

export default App;
