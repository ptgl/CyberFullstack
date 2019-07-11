import React, { Component } from "react";

import Item from "./TaskItems/Item";
import THead from "./TaskItems/THead";

class TaskItems extends Component {
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
    let { sortType, tasks, filterType, filterData} = this.props;

    //search
    tasks = tasks.filter(o=>o.name.match(this.state.searchKey));
    
    //sort
    tasks.sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();

      let lt = sortType === "asc" ? -1 : 1;
      let gt = sortType === "asc" ? 1 : -1;

      return x < y ? lt : x > y ? gt : 0;
    });

    //filter
    switch(filterType){
      case 'priority':
        tasks = filterData.toLowerCase() === 'all' ? tasks : tasks.filter(o=>o.priority === filterData);
        break;
      case 'label':
          tasks = filterData.toLowerCase() === 'all' ? tasks : tasks.filter(o=>o.labelArr.includes(filterData));
        break;
      default:
    }

    //show items
    let items = tasks.map((o, idx) => (
      <Item
        key={idx}
        data={o}
        deleteTask={this.props.deleteTask}
        openModal={this.props.openModal}
      />
    ));

    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group text-left my-0">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Tìm kiếm công việc"
                  onChange={this.handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <THead />
            <tbody>
              {/* <Item/>
              <Item/> */}
              {items}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskItems;
