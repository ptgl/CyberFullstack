import React, { Component } from "react";
import {sortByPrice} from "../../Action/actions";
import { connect } from "react-redux";

class Sort extends Component {
  handleChange = e => {
    //console.log(e.target.value);
    this.props.changeSortType(e.target.value);
  };

  render() {
    return (
      <div className="form-group text-left">
        <label>Order by Price</label>
        <select
          name="sort"
          className="form-control"
          onChange={this.handleChange}
        >
          <option value="asc">From Lowest</option>
          <option value="desc">From Highest</option>
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSortType: type => {
      dispatch(sortByPrice(type));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sort);
