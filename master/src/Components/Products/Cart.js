import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
          <div id="header-cart" className="float-right">
          <a
            data-reactroot
            rel="nofollow"
            href="/checkout/cart?src=header-cart"
            className="header-cart item text-white"
            admicro-data-event={100115}
            admicro-data-auto={1}
            admicro-data-order="false"
          >
            <i className="fa fa-2x fa-shopping-cart"></i>
            <span className="cart-count">0</span>
            
          </a>
        </div>
        
        );
    }
}

export default Cart;