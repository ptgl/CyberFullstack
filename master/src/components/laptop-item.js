import React, { Component } from "react";

class laptopItem extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={this.props.img}
              alt="Card"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{this.props.name}</h4>
              <p className="card-text">
                {this.props.desc}
              </p>
              <a href="true" className="btn btn-primary">
                Detail
              </a>
              <a href="true" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default laptopItem;
