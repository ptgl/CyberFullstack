import React, { Component } from 'react';
import Product from "./Product";
class NewArrivals extends Component {
    render() {
        return (
            <div id="new-arrivals" className="section">
                <h1>New Arrivals</h1>
                <div className="new-arrivals__content">
                    <Product pic="p13" />
                    <Product pic="p22" />
                    <Product pic="p9" />
                    <Product pic="p16" />
                    <div className="clear" />
                </div>
            </div>
        );
    }
}

export default NewArrivals;