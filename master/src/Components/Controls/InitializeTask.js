import React, { Component } from 'react';

class InitializeTask extends Component {
    render() {
        return (
            <button
        type="button"
        className="btn my-3 btn--initializeTask"
        data-toggle="modal"
        data-target="#modalTask"
      >
        <i className="fa fa-pencil-square-o" />
        Initialize Task
      </button>
        );
    }
}

export default InitializeTask;