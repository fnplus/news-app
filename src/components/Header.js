import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ paddingTop: "30px" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <a style={headerStyle} href="https://fnplus.tech">FNPLUS TECH</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
