import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
import Product from "../Model/Product";
import * as actions from "../Action/actions";
import { connect } from "react-redux";

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log("open page",props);
    this.isAdd = props.match.path.indexOf("add-product") > -1;
    this.state = {
      id: "",
      name: "",
      description: "",
      rating: "",
      price: 0,
      sizes: [],
      image: ""
    };
  }

  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sizeChange = sizes => {
    console.log(sizes);
    this.setState({
      sizes
    });
  };

  componentWillReceiveProps(nextProps) {
    if (!this.isAdd) {
      this.setState({
        id: nextProps.editingProduct.id,
        name: nextProps.editingProduct.name,
        description: nextProps.editingProduct.description,
        rating: nextProps.editingProduct.rating,
        price: nextProps.editingProduct.price,
        sizes: nextProps.editingProduct.sizes,
        image: nextProps.editingProduct.image
      });
    } else {
      this.setState({
        id: "",
        name: "",
        description: "",
        rating: "",
        price: 0,
        sizes: [],
        image: ""
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    let newProduct = new Product(
      this.state.id,
      this.state.name,
      this.state.description,
      this.state.rating,
      +this.state.price,
      this.state.sizes,
      this.state.image
    );
    console.log(this.isAdd);
    if (this.isAdd) {
      console.log("add-products");
      this.props.addProduct(newProduct);
    } else {
        this.props.editProduct(newProduct);
    }
    this.props.history.push("/")
  };

  render() {
    let { editingProduct, match } = this.props;
    const isAdd = this.isAdd;
    return (
      <form onSubmit={this.onSubmit} className="container">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">
              {isAdd ? "Add a new product" : "Edit Product"}
            </h4>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="taskName">Product Name:</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="taskName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                onChange={this.handleChange}
                className="form-control"
                value={this.state.description}
                rows={2}
                name="description"
                id="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                value={this.state.rating}
                name="rating"
                onChange={this.handleChange}
                className="form-control"
                id="rating"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <label htmlFor="">Sizes:</label>
            <br />

            <CheckboxGroup
              name="sizes"
              value={this.state.sizes}
              onChange={this.sizeChange}
            >
              <Checkbox value="XS" />
              XS &nbsp;
              <Checkbox value="S" />
              S &nbsp;
              <Checkbox value="M" />
              M &nbsp;
              <br />
              <Checkbox value="ML" />
              ML &nbsp;
              <Checkbox value="L" />
              L &nbsp;
              <Checkbox value="XL" />
              XL &nbsp;
              <Checkbox value="XXL" />
              XXL &nbsp;
            </CheckboxGroup>

            <br />
            <label htmlFor="image">Choose a profile picture:</label>
            <br />
            <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={this.handleChange}
              defaultValue={this.state.image}
            />
            <br />

            {/* Modal footer */}
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">
                {isAdd ? "Add" : "Edit"}
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={()=>{this.props.history.push("/")}}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { isAdd: state.isAddNewTask, editingProduct: state.editingProduct };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: prod => {
      dispatch(actions.addProduct(prod));
    },
    editProduct: prod => {
      dispatch(actions.editProduct(prod));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
