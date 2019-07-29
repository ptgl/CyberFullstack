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
    // let imgSrc = data.img.startsWith("http") ? data.img : `./img/${data.img}`;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4 mt-5">
        <div className="container">
          <div className="product-item" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src="./img/sp_note7.png"
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
                  suffix={"đ"}
                />
              </h3>
              <p className="card-text">
                The Galaxy Note7 comes with a perfectly symmetrical design for
                good reason
              </p>
              <a href="#" className="btn btn-primary">
                Detail
              </a>
              <a href="#" className="btn btn-danger">
                Cart
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
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
