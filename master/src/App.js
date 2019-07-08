import React from "react";
import "./App.css";

import Control from "./Components/Controls";
import Modal from "./Components/Modal";
import TaskItems from "./Components/TaskItems";
import listOfTask from "./Modal/getData";

function App() {
  return (
    <div>
      <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
      <div className="container-fluid">
        <div className="row">
          {/* PANEL */}
          <Control />
          {/* DISPLAY */}
          <TaskItems tasks={listOfTask.list} />
        </div>
      </div>
      {/* The Modal */}
      <Modal />
    </div>
  );
}

export default App;
