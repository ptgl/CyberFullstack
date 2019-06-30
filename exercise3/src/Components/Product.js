import React, { Component } from 'react';
class Product extends Component {
    render() {
        return (
            <div className="product">
                <div className="product__item">
                    <img src={require(`../img/${this.props.pic}.jpg`)} alt />
                    <h3>My product is the best</h3>
                    <p className="product__item__size">XL/XXL/S</p>
                    <p className="product__item__price">
                        <span>$100.00</span>
                        <span>$70.00</span>
                    </p>
                    <button>Add To Cart</button>
                </div>
            </div>
        );
    }
}

export default Product;