import React, { Component } from 'react';
import './css/Choices.css';

class Choices extends Component {

    render() {
        return (
            <div className="choices-main">
                {this.props.choices.map((choice) => (
                    <div key={choice.id} className="choice-option">
                        <label className="choices-container">
                            <input type="checkbox" checked={choice.checked} onChange={this.props.setChecked.bind(this, choice.id)} />
                            <div className="choice-letter">{choice.tag}</div>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                ))}

                <div style={{ paddingTop: '20px' }}>
                    <label className="choices-container">
                        <input type="checkbox" checked={this.props.subscribeToAll} onChange={this.props.setSubscribeAll} />
                        <div className="choice-letter">Subscribe To All</div>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        );
    }
}


export default Choices;
