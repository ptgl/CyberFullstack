import React, { Component } from "react";

class Sort extends Component {

  handleChange = e =>{
    //console.log(e.target.value);
    this.props.changeSortType(e.target.value)
  }

  render() {
    return (
      <div className="form-group text-left">
        <label>Order by</label>
        <select name="sort" className="form-control" onChange={this.handleChange}>
          <option value="asc">From A to Z</option>
          <option value="desc">From Z to A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
