import React from "react";

import "../css/Tag.css";

const Tag = ({ selectTag, tagName }) => {
  return (
    <button type="button" className="tag" onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
};

export default Tag;
