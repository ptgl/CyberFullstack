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
      task: null,
      taskList: listOfTask.list || [],
      sortType: 'asc',
      searchKey: '',
      filterType: '',
      filterData: '' 
    }
  }

  componentWillMount = ()=>{
    console.log("will mount")
    let taskJson = JSON.parse(localStorage.getItem("tasks")) || listOfTask.list;
    listOfTask.list = taskJson;
    this.setState({
      taskList: taskJson
    })
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

  editTask = (data)=>{
    console.log(data);
    listOfTask.editTask(data);
    this.setState({
      taskList: listOfTask.list
    })
    localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
  }

  deleteTask = (data)=>{
    console.log(data);
    listOfTask.deleteTask(data);
    this.setState({
      taskList: listOfTask.list
    })
    localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
  }

  changeSortType = type=>{
    this.setState({
      sortType: type
    })
  }

  changeSearchKey = key =>{
    this.setState({
      searchKey: key
    })
  }

  filter = (filterType, filterData)=>{
    //console.log(filterData,filterType)
    this.setState({
      filterType,
      filterData
    })
  }
  
  changeProgressStatus = (id, status)=>{
    console.log(id, status);
    debugger
    listOfTask.list = JSON.parse(localStorage.getItem("tasks")) ;
    let idx = listOfTask.findTaskIndex(id);
    listOfTask.list[idx].status = +status;
    localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
    this.setState({
      taskList: listOfTask.list
    })
  }

  render() {
    let {filterType, filterData} = this.state;
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control filter={this.filter}  openModal={this.openModal} generateData={this.generateData} changeSortType={this.changeSortType}/>
            {/* DISPLAY */}
            <TaskItems changeProgressStatus={this.changeProgressStatus} filterType={filterType} filterData={filterData}  sortType={this.state.sortType} tasks={this.state.taskList} deleteTask={this.deleteTask} openModal={this.openModal}/>
          </div>
        </div>
        {/* The Modal */}
        <Modal addNewTask={this.addNewTask} editTask={this.editTask} task={this.state.task} action={this.state.action}/>
      </div>
    );
  }
}

export default Homepage;
