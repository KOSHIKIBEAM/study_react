import React from "react";

import "../css/TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          className="task_input"
          type="text"
          name=""
          id=""
          placeholder="Enter your task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
          <div>
            <select name="" id="" className="task_status">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
