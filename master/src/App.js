import React from "react";
import "./App.css";
import Homepage from "./Container/Homepage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActionPage from "./Pages/ActionPage";
import Cart from "./Pages/CartDetail";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/add-product" exact component={ActionPage} />
        <Route path="/edit-product/:id" exact component={ActionPage} />
        <Route path="/cart" exact component={Cart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
