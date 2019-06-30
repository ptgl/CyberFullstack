import React, { Component } from 'react';
import Product from "./Product";
class NewProducts extends Component {
    render() {
        return (
            <div id="new-product" className="section">
                    <h1>New Products</h1>
                    <div className="new-product__content">
                        {/*PRODUCT*/}
                        <Product pic="p13"/>
                        <Product pic="p22"/>
                        <Product pic="p9"/>
                        <Product pic="p16"/>
                        
                        <div className="clear" />
                    </div>
                </div>
        );
    }
}

export default NewProducts;