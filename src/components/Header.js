import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <a style={headerStyle} href="https://fnplus.tech">FNPLUS TECH</a>
            </div>
        );
    }
}

const headerStyle = {
    fontSize: "24px",
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: "10px",
    fontWeight: "700",
    color: "#000",
    display: "block",
    textDecoration: "none"
}

export default Header;
