import React, { Component } from 'react';

class InitializeTask extends Component {

  initializeTask = ()=>{
    this.props.generateData()
  }

    render() {
        return (
            <button
        type="button"
        className="btn my-3 btn--initializeTask"
        
        onClick={this.props.generateData}
      >
        <i className="fa fa-pencil-square-o" />
        Get data from local storage
      </button>
        );
    }
}

export default InitializeTask;