import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
import Product from "../Model/Product";
import * as actions from "../Action/actions";
import { connect } from "react-redux";
import isAddNewTask from "../Reducer/isAddNewTask";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      desc: "",
      rating: "",
      price: "",
      sizes: []
    };
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value);
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
    console.log(nextProps);
    if (!nextProps.isAdd) {
      this.setState({
        id: nextProps.editingProduct.id,
        name: nextProps.editingProduct.name,
        desc: nextProps.editingProduct.desc,
        rating: nextProps.editingProduct.rating,
        price: nextProps.editingProduct.price,
        sizes: nextProps.editingProduct.sizes,
      });
    } else {
      this.setState({
        id: "",
        name: "",
        desc: "",
        rating: "",
        price: 0,
        sizes: [],
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    let newProduct = new Product(
      this.state.id,
      this.state.name,
      this.state.desc,
      this.state.rating,
      +this.state.price,
      this.state.sizes
    );
    console.log(this.props.isAdd);
    if (this.props.isAdd) {
      console.log("add-products");
      this.props.addProduct(newProduct);
    } else {
      //console.log(newTask)
       this.props.editProduct(newProduct);
    }
  };

  render() {
    let { task, action, isAdd, editingProduct } = this.props;

    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {isAdd ? "Add a new product" : "Edit Product"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form role="form" onSubmit={this.onSubmit}>
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
                    value={this.state.desc}
                    rows={2}
                    name="desc"
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
                  XS
                  <br />
                  <Checkbox value="S" />
                  S
                  <br />
                  <Checkbox value="M" />
                  M
                  <br />
                  <Checkbox value="L" />
                  L
                  <br />
                  <Checkbox value="XL" />
                  XL
                  <br />
                </CheckboxGroup>

                <br />
                <br />

                {/* Modal footer */}
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    {isAdd ? "Add" : "Edit"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
