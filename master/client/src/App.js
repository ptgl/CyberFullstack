import React from "react";
import "./App.css";
import Menu from "./component/Menu";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Profile from "./component/auth/Profile";
import NotFound from "./component/NotFound";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import setHeaders from "./helper/setHeaders";
import validateToken from "./helper/validateToken";
import UserList from "./component/user/UserList"

if(validateToken().status) setHeaders({ 
 token: localStorage.getItem("token")
 });


function App(props) {
  const { auth } = props;
  const { isAuthenticate } = auth;

  return (
    <div className="App">
      {/* <UserList/> */}
      <BrowserRouter>
        <Menu />
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/profile" exact component={isAuthenticate ? Profile : NotFound}></Route>
        <Route path="/users" exact component={isAuthenticate ? UserList : NotFound}></Route>
      
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = states => {
  return {
    auth: states.auth
  };
};
export default connect(mapStateToProps)(App);
