import React, { Component } from 'react';
import './css/Choices.css';

class Choices extends Component {
    render() {
        return (
            <div className="choices-main">
                {this.props.choices.map((choice) => (
                    <div className="choice-option">
                        <label className="choices-container">
                            <input type="checkbox" />
                            <div className="choice-letter">{choice}</div>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}

export default Choices;
