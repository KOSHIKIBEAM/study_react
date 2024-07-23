import React, { useState } from "react";

import "./css/App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/target.png";
import DoingIcon from "./assets/star.png";
import DoneIcon from "./assets/check.png";

const App = () => {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To do" icon={TodoIcon} tasks={tasks} status="todo" />
        <TaskColumn
          title="Doing"
          icon={DoingIcon}
          tasks={tasks}
          status="doing"
        />
        <TaskColumn title="Done" icon={DoneIcon} tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
