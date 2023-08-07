import { useRef, useState } from "react";

const Task = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.value = "";
  };

  return (
    <div>
      <h1>your text here</h1>
      <textarea ref={ref}>Your Text Here</textarea>
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
