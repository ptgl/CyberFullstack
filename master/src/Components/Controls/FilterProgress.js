import React, { Component } from "react";

class FilterProgress extends Component {
  handleFilter = status => {
    this.props.filter("progress", status);
  };

  render() {
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left">
          Lọc
          <li className="py-1 display-5 lead" onClick={()=>this.handleFilter(1)}>
            <i className="fa fa fa-hourglass-start mr-2" />
            Bắt đầu
          </li>
          <li className="py-1 display-5 lead" onClick={()=>this.handleFilter(2)}>
            <i className="fa fa-anchor" />
            Tạm ngưng
          </li>
          <li className="py-1 display-5 lead" onClick={()=>this.handleFilter(3)}>
            <i className="fa fa-check-square-o mr-2" />
            Hoàn thành
          </li>
          <li className="py-1 display-5 lead" onClick={()=>this.handleFilter(4)}>
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
          </li>
          <li className="py-1 display-5 lead" onClick={()=>this.handleFilter(-1)}>
            All
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterProgress;
