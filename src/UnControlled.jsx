import React, { useRef } from "react";

const UnControlled = () => {
  const name = useRef("");
  return (
    <div>
      <h1>UnControlled</h1>
      <input ref={name} type="text" />{" "}
      <button
        onClick={() => {
          console.log("UnControlled", name);
          alert(name.current.value);
        }}
      >
        click
      </button>
    </div>
  );
};

export default UnControlled;
