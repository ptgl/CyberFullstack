import React, { Component } from "react";

import Control from "../Components/Controls";
import Modal from "../Components/Modal";
import TaskItems from "../Components/TaskItems";
import listOfTask from "../Model/getData";
import Task from "../Model/Task";

class Homepage extends Component {

  constructor(props){
    super(props);
    this.state = {
      action: "add"
    }
  }

  addNewTask = (action)=>{
    this.setState({
      task: new Task(),
      action,
    })
  }

  editTask = (data) => {
    console.log(data);
    this.setState({
      task: data,
      action: "edit"
    })
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control addNewTask={this.addNewTask}/>
            {/* DISPLAY */}
            <TaskItems tasks={listOfTask.list}  editTask={this.editTask}/>
          </div>
        </div>
        {/* The Modal */}
        <Modal task={this.state.task} action={this.state.action}/>
      </div>
    );
  }
}

export default Homepage;
