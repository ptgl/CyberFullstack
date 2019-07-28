import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from "../../Action/actions"
class AddNewTask extends Component {
 

  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.props.openModal}
      >
        <i className="fa fa-pencil-square-o" />
        Add A Product
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    openModal: ()=>{
      dispatch(action.openAddModal())
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNewTask);
