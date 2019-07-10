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
      action: "add",
      taskList: listOfTask.list || []
    }
  }

  generateData = ()=>{
    localStorage.setItem("tasks",JSON.stringify(listOfTask.list));
  }

  openModal = (action, task)=>{
    this.setState({
      action,
      task,
      taskList: listOfTask.list
    })
  }

  addNewTask = (data)=>{
    console.log(data);
    listOfTask.addNewTask(data);
    this.setState({
      taskList: listOfTask.list
    })
    localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
  }

  componentWillMount = ()=>{
    console.log("will mount")
    let taskJson = JSON.parse(localStorage.getItem("tasks")) || listOfTask.list;
    listOfTask.list = taskJson;
    this.setState({
      taskList: taskJson
    })
  }

  editTask = (data)=>{
    console.log(data);
    listOfTask.editTask(data);
    this.setState({
      taskList: listOfTask.list
    })
    localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
  }

  render() {
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control openModal={this.openModal} generateData={this.generateData}/>
            {/* DISPLAY */}
            <TaskItems tasks={this.state.taskList}  openModal={this.openModal}/>
          </div>
        </div>
        {/* The Modal */}
        <Modal addNewTask={this.addNewTask} editTask={this.editTask} task={this.state.task} action={this.state.action}/>
      </div>
    );
  }
}

export default Homepage;
