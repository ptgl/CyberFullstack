import React, { Component } from "react";

import AddNewTask from "./Controls/AddNewTask";
import FilterLabel from "./Controls/FilterLabel";
import FilterPriority from "./Controls/FilterPriority";
import InitializeTask from "./Controls/InitializeTask";
import Sort from "./Controls/Sort";
import FilterProgress from "./Controls/FilterProgress";

class Controls extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="true" />
          <h3 className="text-white d-inline font-weight-light ml-2">
            Lê Quang Song
          </h3>
        </div>

        <AddNewTask openModal={this.props.openModal} />

        <InitializeTask generateData={this.props.generateData}/>

        <div className="px-3">
          <FilterProgress />

          <FilterLabel filter={this.props.filter} />

          <FilterPriority filter={this.props.filter} />

          <Sort changeSortType={this.props.changeSortType}/>
        </div>
      </div>
    );
  }
}

export default Controls;
