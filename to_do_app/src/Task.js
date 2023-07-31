import { useState } from "react";
const Task = () => {
  const [place, setText] = useState("");
  const handleClick = (description) => {
    setText("");
  };

  return (
    <div>
      <h1>your text here</h1>
      <textarea>{place}</textarea>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Delete Text
      </button>
    </div>
  );
};

export default Task;
