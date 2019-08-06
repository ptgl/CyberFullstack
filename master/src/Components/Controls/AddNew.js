import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from "../../Action/actions";
import { withRouter } from 'react-router-dom'; 
class AddNew extends Component {
 

  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--newTask"
        onClick={()=>{this.props.history.push(`/add-product`)}}
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

export default withRouter(connect(null, mapDispatchToProps)(AddNew));
