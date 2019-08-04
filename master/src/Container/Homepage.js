import React, { Component } from "react";

import Control from "../Components/Controls";
import Modal from "../Components/Modal";
import ProductItems from "../Components/ProductItems";
import listOfProducts from "../Model/getData";

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
    let taskJson = JSON.parse(localStorage.getItem("products")) || listOfProducts.list;
    listOfProducts.list = taskJson;
    this.setState({
      taskList: taskJson
    })
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
  

  render() {
    let {filterType, filterData} = this.state;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control filter={this.filter} changeSortType={this.changeSortType}/>
            {/* DISPLAY */}
            <ProductItems   sortType={this.state.sortType}  openModal={this.openModal}/>
          </div>
        </div>
        {/* The Modal */}
        <Modal  action={this.state.action}/>
      </div>
    );
  }
}

export default Homepage;
