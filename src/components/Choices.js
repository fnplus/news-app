import React, { Component } from 'react';
import './Choices.css';

class Choices extends Component {
    render() {
        return (
            <div className="choices-main">
                {this.props.choices.map((choice) => (
                    <div class="choice-option">
                        <label class="choices-container">
                            <input type="checkbox" />
                            <div class="choice-letter">{choice}</div>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}

export default Choices;
