import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    let { cart } = this.props;
    let productCart = [];
    for (let item of cart) {
      if (productCart.findIndex(i => i.id === item) === -1)
        productCart.push({ id: item, quantity: 1 });
      else {
        productCart.find(o => o.id === item).quantity++;
      }
    }

    return (
      <div id="header-cart" className="float-right">
        <Link className="header-cart item text-white" to="/cart">
          <i className="fa fa-2x fa-shopping-cart" />
          <span className="cart-count text-dark">{cart.length}</span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps)(Cart);
