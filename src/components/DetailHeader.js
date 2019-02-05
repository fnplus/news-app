import React, { Component } from 'react';
import './css/DetailHeader.css';

class DetailHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ paddingTop: "30px" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="detail-container">
                                <div className="detail-heading">Community News</div>
                                <div className="detail-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus velit, accumsan nec nunc eu, lobortis aliquet augue. Morbi congue consequat iaculis. Mauris purus ex, posuere vitae sem id, faucibus vestibulum mauris.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default DetailHeader;
