import React, { Component } from "react";

class FilterPriority extends Component {
  handleFilter = e =>{
    this.props.filter('priority', e.target.value)
  }
  render() {
    return (
      <div className="form-group text-left">
        <label htmlFor="sel1">Độ ưu tiên</label>
        <select name="priority" className="form-control" onChange={this.handleFilter}>
          <option value="all" className="font-weight-bold">Tất cả</option>
          <option value="low" className="text-info font-weight-bold">Thấp</option>
          <option value="average" className="text-success font-weight-bold">Trung bình</option>
          <option value="high" className="text-danger font-weight-bold">Cao</option>
        </select>
      </div>
    );
  }
}

export default FilterPriority;
