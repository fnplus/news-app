import React, { Component } from 'react';
import './css/Signup.css';
import Choices from './Choices';

class Signup extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ paddingTop: "30px", paddingBottom: "40px" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <Choices choices={this.props.choices} subscribeToAll={this.props.subscribeToAll}
                                setSubscribeAll={this.props.setSubscribeAll} setChecked={this.props.setChecked} />
                            <form className="signup-form">
                                <input
                                    type="submit"
                                    value="Sign Me Up"
                                    className="signup-submitButton"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}

export default Signup;
