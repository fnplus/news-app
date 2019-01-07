import React, { Component } from 'react';

class Signup extends Component {

    state = {
        email: ''
    }

    onChange = (e) => this.setState({ email: e.target.value });

    render() {
        return (
            <form style={formStyle}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email Id"
                    value={this.state.email}
                    onChange={this.onChange}
                    style={inputStyle}
                />
                <input
                    type="submit"
                    value="Sign Me Up"
                    style={submitButtonStyle}
                />
            </form>
        );

    }
}

const formStyle = {
    width: '500px',
    margin: 'auto'
}

const inputStyle = {
    width: '75%',
    paddingRight: '100px'
};

const submitButtonStyle = {
    width: '20%',
    float: 'right'

}

export default Signup;
