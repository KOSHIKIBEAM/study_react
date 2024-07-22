import React from "react";

import "../css/TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/Garbage.png";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is Sample Text.</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="JavaScript" />
          <Tag tagName="React" />
        </div>
        <div className="task_delete">
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;