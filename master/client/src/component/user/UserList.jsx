import React, { Component } from "react";
import {connect}from "react-redux";
import {getUsers} from "../../actions/users"

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return <div>
      <h1>User List</h1>
    </div>;
  }
}

export default connect(null, {getUsers})(UserList);
