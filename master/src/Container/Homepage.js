import React, { Component } from "react";

import Control from "../Components/Controls";
import Modal from "../Components/Modal";
import ProductItems from "../Components/ProductItems";
import listOfProducts from "../Model/getData";
import Task from "../Model/Product";

class Homepage extends Component {

  constructor(props){
    super(props);
    this.state = {
      task: null,
      taskList: listOfProducts.list || [],
      sortType: 'asc',
      searchKey: '',
      filterType: '',
      filterData: '' 
    }
  }

  componentWillMount = ()=>{
    console.log("will mount")
    let taskJson = JSON.parse(localStorage.getItem("tasks")) || listOfProducts.list;
    listOfProducts.list = taskJson;
    this.setState({
      taskList: taskJson
    })
  }

  generateData = ()=>{
    localStorage.setItem("tasks",JSON.stringify(listOfProducts.list));
  }

  

  addNewTask = (data)=>{
    console.log(data);
    listOfProducts.addNewTask(data);
    this.setState({
      taskList: listOfProducts.list
    })
    localStorage.setItem("tasks", JSON.stringify(listOfProducts.list));
  }

  editTask = (data)=>{
    console.log(data);
    listOfProducts.editTask(data);
    this.setState({
      taskList: listOfProducts.list
    })
    localStorage.setItem("tasks", JSON.stringify(listOfProducts.list));
  }

  deleteTask = (data)=>{
    console.log(data);
    listOfProducts.deleteTask(data);
    this.setState({
      taskList: listOfProducts.list
    })
    localStorage.setItem("tasks", JSON.stringify(listOfProducts.list));
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
    listOfProducts.list = JSON.parse(localStorage.getItem("tasks")) ;
    let idx = listOfProducts.findTaskIndex(id);
    listOfProducts.list[idx].status = +status;
    localStorage.setItem("tasks", JSON.stringify(listOfProducts.list));
    this.setState({
      taskList: listOfProducts.list
    })
  }

  render() {
    let {filterType, filterData} = this.state;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control filter={this.filter}   generateData={this.generateData} changeSortType={this.changeSortType}/>
            {/* DISPLAY */}
            <ProductItems changeProgressStatus={this.changeProgressStatus} filterType={filterType} filterData={filterData}  sortType={this.state.sortType} tasks={this.state.taskList} deleteTask={this.deleteTask} openModal={this.openModal}/>
          </div>
        </div>
        {/* The Modal */}
        <Modal addNewTask={this.addNewTask} editTask={this.editTask} task={this.state.task} action={this.state.action}/>
      </div>
    );
  }
}

export default Homepage;
