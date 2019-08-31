import React from 'react';
import './App.css';
import Menu from "./component/Menu"
import UserList from "./component/user/UserList";
import Register from "./component/auth/Register"

function App() {
  return (
    <div className="App">
      <Menu/>
      <UserList/>
      <Register/>
    </div>
  );
}

export default App;
