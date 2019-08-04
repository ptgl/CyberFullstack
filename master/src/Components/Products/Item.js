import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Action/actions";
import NumberFormat from "react-number-format";

class Item extends Component {
  constructor(props) {
    console.log("constructor", props.data.status);
    super(props);
    this.state = {
      selectedStatus: props.data.status
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("next ",props, state );
  // }

  handleChangeStatus = e => {
    //console.log(e.target.value);
    this.props.changeProgressStatus(this.props.data.id, e.target.value);
    this.setState({
      selectedStatus: e.target.value
    });
  };

  handleEditing = task => {
    this.props.openModal("edit", task);
  };

  render() {
    let { data } = this.props;
    let img = data.image.split('\\').pop();
    // let imgSrc = data.img.startsWith("http") ? data.img : `./img/${data.img}`;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4 mt-5">
        <div className="container">
          <div className="product-item" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={`./img/${img}`}
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{data.name}</h4>
              <h3 className="card-title text-center">
                <NumberFormat
                  value={data.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h3>
              
              <a href="#" className="btn btn-danger mb-1" onClick={()=>this.props.addToCart(data.id)}>
                Add to Cart
              </a><br/>
              <a
                href="#"
                className="btn btn-success mr-1"
                data-toggle="modal"
                data-target="#modalTask"
                onClick={()=>{this.props.openModal(); this.props.getEditingProduct(data)}}
              >
                Edit
              </a>
              <a
                href="#"
                className="btn btn-danger"
                onClick={() => this.props.deleteProduct(data.id)}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => {
      dispatch(action.openEditModal());
    },
    deleteProduct: id => {
      dispatch(action.deleteProduct(id));
    },
    getEditingProduct: prod=>{
      dispatch(action.getEditingProduct(prod))
    },
    addToCart: id=>{
      dispatch(action.addToCart(id))
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
