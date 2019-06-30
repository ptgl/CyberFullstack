import React, { Component } from 'react';
import FashionItem from "./Fashion_Item";
class FashionTrend extends Component {
    render() {
        return (
            <div id="fashion" className="section">
                    <h1>Latest Fashion Trends</h1>
                    <FashionItem pic="l1"/>
                    <FashionItem pic="l1"/>
                    <FashionItem pic="l6"/>
                    <FashionItem pic="l5"/>
                    <FashionItem pic="l4"/>
                    <FashionItem pic="l2"/>
                    <div className="clear" />
                </div>
        );
    }
}

export default FashionTrend;