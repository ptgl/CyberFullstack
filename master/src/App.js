import React from "react";
import "./App.css";
import Homepage from "./Container/Homepage";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActionPage from "./Pages/ActionPage";
import Demo from "./Pages/Demo";
import Cart from "./Pages/CartDetail";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/add-product" exact component={ActionPage} />
        <Route path="/edit-product/:id" exact component={ActionPage} />
        <Route path="/cart" exact component={Cart} />
        {/* <Route path="/" component={Demo} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
