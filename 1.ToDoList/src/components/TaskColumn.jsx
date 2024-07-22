import React from "react";
import Todo from "../assets/target.png";

import "../css/TaskColumn.css";

const TaskColumn = () => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={Todo} alt="" /> To do
      </h2>
    </section>
  );
};

export default TaskColumn;
