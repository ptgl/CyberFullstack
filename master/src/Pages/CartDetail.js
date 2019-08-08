import React, { Component } from "react";
import { connect } from "react-redux";

class CartDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { detail, productList } = this.props;
    console.log(detail);
    let total = 0;
    let productCart = [];
    for (let item of detail) {
      let product = productList.find(o=>o.id === item);
      if (productCart.findIndex(i => i.product.id === item) === -1) {
        productCart.push({ product: product, quantity: 1 });
        
      } else {
        productCart.find(o => o.product.id === item).quantity++;
      }
      total += product.price;
    }
    console.log(productCart);
    let items = productCart.map((i, idx) => {
      let { quantity, product } = i;
      return (
        <div key={idx} className="row ml-4 mb-4 p-3 cart-item">
          <div className="cart-img col-md-2">
            <img
              className="img-fluid"
              src={`./img/${product.image}`}
              alt="Card image"
            />
          </div>
          <div className="info col-md-8">
            <p>{product.description}</p>
            <p>Size: {product.sizes.join(", ")}</p>
            <strong>Quantity: {quantity}</strong>
          </div>
          <div className="cart-price col-md-2">
            <strong>$ {product.price}</strong>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1 class="mb-4 ml-4 mt-2">Cart Details</h1>
        <div className="row">
          <div className="col-md-8">{items}</div>
          <div className="col-md-4 cart-total">
            <strong>Total: $ {total}</strong>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.cart,
    productList: state.productList,
  };
};

export default connect(mapStateToProps)(CartDetail);
