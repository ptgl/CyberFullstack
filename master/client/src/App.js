import React from "react";
import "./App.css";
import Menu from "./component/Menu";
import UserList from "./component/user/UserList";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Menu />
      {/* <UserList/> */}
      <BrowserRouter>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
