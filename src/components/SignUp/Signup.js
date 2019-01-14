import React, { Component } from 'react';
import './css/Signup.css';
import Choices from './Choices';

class Signup extends Component {

    state = {
        email: ''
    }

    onChange = (e) => this.setState({ email: e.target.value });

    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ paddingTop: "30px" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <Choices choices={this.props.choices} />
                            <form className="form">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email Id"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    className="input"
                                />
                                <input
                                    type="submit"
                                    value="Sign Me Up"
                                    className="submitButton"
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
