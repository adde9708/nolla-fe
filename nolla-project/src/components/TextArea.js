import React from "react";
export const TextArea = ({ onChange, textValue }) => {
  return (
    <div className="textarea-design">
      <textarea
        placeholder="Type here"
        rows={5}
        cols={33}
        onChange={onChange}
        value={textValue}
      ></textarea>
    </div>
  );
};
