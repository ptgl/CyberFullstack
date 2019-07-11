import React, { Component } from "react";

class FilterLabel extends Component {
  
  handleFilter = e =>{
    //console.log(e);
    this.props.filter('label', e.target.innerText);
  }

  render() {
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left">
          Nhãn
          
          <li className="py-1 display-5 lead" onClick={this.handleFilter}>
            <i className="fa fa-circle mr-2" />
            Frontend
          </li>
          <li className="py-1 display-5 lead" onClick={this.handleFilter}>
            <i className="fa fa-circle mr-2" />
            Backend
          </li>
          <li className="py-1 display-5 lead" onClick={this.handleFilter}>
            <i className="fa fa-circle mr-2" />
            API
          </li>
          <li className="py-1 display-5 lead" onClick={this.handleFilter}>
            <i className="fa fa-circle mr-2" />
            Issue
          </li>
          <li className="py-1 display-5 lead" onClick={this.handleFilter}>
            All
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterLabel;
