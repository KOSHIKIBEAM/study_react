import React from "react";

import "./css/App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/target.png";
import DoingIcon from "./assets/star.png";
import DoneIcon from "./assets/check.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="To do" icon={TodoIcon} />
        <TaskColumn title="Doing" icon={DoingIcon} />
        <TaskColumn title="Done" icon={DoneIcon} />
      </main>
    </div>
  );
};

export default App;
