import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return (
            <div id="copy-right">
                    <div className="copy-right__left">
                        <span>© Copyright.NewShop</span>
                    </div>
                    <div className="copy-right__right">
                        <img src={require("../img/card.png")} alt />
                    </div>
                    <div className="clear" />
                </div>
        );
    }
}

export default Copyright;