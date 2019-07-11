import React, { Component } from "react";

class Sort extends Component {

  handleChange = e =>{
    //console.log(e.target.value);
    this.props.changeSortType(e.target.value)
  }

  render() {
    return (
      <div className="form-group text-left">
        <label>Sắp xếp theo công việc</label>
        <select name="sort" className="form-control" onChange={this.handleChange}>
          <option value="asc">Từ A đến Z</option>
          <option value="desc">Từ Z đến A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
