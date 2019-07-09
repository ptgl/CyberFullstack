import React, { Component } from "react";

import Item from "./TaskItems/Item";
import THead from "./TaskItems/THead";

class TaskItems extends Component {
  render() {

    let items = this.props.tasks.map((o, idx) => <Item key={idx} data={o} editTask={this.props.editTask}/>);

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
                  className="form-control"
                  placeholder="Tìm kiếm công việc"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <THead/>
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
