import React, { Component } from "react";

import Item from "./Products/Item";
import Cart from "./Products/Cart";
import Account from "./Products/Account";
import { connect } from "react-redux";

class ProductItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ""
    };
  }

  handleSearch = e => {
    this.setState({
      searchKey: e.target.value
    });
  };

  render() {
    let { sortType, filterSize, productList } = this.props;

    //search
    productList = productList.filter(o =>
      o.name.toLowerCase().match(this.state.searchKey.toLowerCase())
    );

    //sort
    productList.sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();

      let lt = sortType === "asc" ? -1 : 1;
      let gt = sortType === "asc" ? 1 : -1;

      return x < y ? lt : x > y ? gt : 0;
    });

    //filter
    if (filterSize.length > 0) {
      productList = productList.filter(o => {
        return o.sizes.filter(x => filterSize.includes(x)).length > 0;
      });
    }
    //show items
    let items = productList.map((o, idx) => (
      <Item
        key={idx}
        data={o}
        deleteTask={this.props.deleteTask}
        openModal={this.props.openModal}
        changeProgressStatus={this.props.changeProgressStatus}
      />
    ));

    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            {/* <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div> */}
            <div className="col-md-6">
              <div className="form-group text-left my-0">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search Products"
                  onChange={this.handleSearch}
                />
              </div>
            </div>
            <div className="col-md-6">
              <Cart />
              <Account />
            </div>
          </div>
        </div>
        <div className="row offset-1">{items}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: state.productList,
    filterSize: state.filterSize
  };
};

export default connect(mapStateToProps)(ProductItems);
