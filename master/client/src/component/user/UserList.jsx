import React, { Component } from "react";
import axios from "axios";
import {connect}from "react-redux";
import {getUsers} from "../../actions/users"

class UserList extends Component {
  componentDidMount() {
      //https://linh-xedike2.herokuapp.com/api/users
    // const url = "http://localhost:5000/api/users";
    // axios.get(url).then(user => {
    //   console.log(user.data);
    // });
    this.props.getUsers()
  }

  render() {
    return <div></div>;
  }
}

export default connect(null, {getUsers})(UserList);
