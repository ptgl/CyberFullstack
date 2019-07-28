import React, { Component } from "react";

import AddNewTask from "./Controls/AddNewTask";
import FilterLabel from "./Controls/FilterLabel";
import InitializeTask from "./Controls/InitializeTask";
import Sort from "./Controls/Sort";

class Controls extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <h3 className="text-white d-inline font-weight-bold ml-2">
            Shopping
          </h3>
        </div>

        <AddNewTask openModal={this.props.openModal} />

        <InitializeTask generateData={this.props.generateData}/>

        <div className="px-3">

          <FilterLabel filter={this.props.filter} />


          <Sort changeSortType={this.props.changeSortType}/>
        </div>
      </div>
    );
  }
}

export default Controls;
