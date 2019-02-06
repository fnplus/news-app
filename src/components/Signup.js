import React, { Component } from 'react';

import { WithContext as ReactTags } from 'react-tag-input';

import './css/tags.css';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Signup extends Component {

    render() {
        let placeholder = "Choose Your Domains";
        return (
            <React.Fragment>
                <div className="reacttag-container container">
                    <ReactTags tags={this.props.tags}
                        placeholder={placeholder}
                        suggestions={this.props.suggestions}
                        handleDelete={this.props.handleDelete}
                        handleAddition={this.props.handleAddition}
                        allowDragDrop={false}
                        delimiters={delimiters}
                        inline={false} />
                </div>

                <div className={"show-error container " + (this.props.showError ? '' : 'hidden')}>No Options Selected</div>

                <form className="signup-form container">
                    <input type="submit" className="signup-submitButton" value="Sign Me Up" onClick={this.props.handleSubmit} />
                </form>
            </React.Fragment>
        );
    }
}

export default Signup;
