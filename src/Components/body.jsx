import React, { useState, useMemo, useCallback } from "react";
import Navbar from "./navbar";

const Body = () => {
  const [count, setCount] = useState(0);
  console.log("body render");
  const memo = useMemo(() => {
    return { title: "Webbrain" };
  }, []);
  const callback = useCallback((param) => {
    return param;
  }, []);
  return (
    <div>
      <Navbar obj={memo} callback={callback} />
      <div style={{ padding: "20px" }}>
        <h1>Body</h1>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button
          onClick={() => setCount(count + 1)}
          style={{ marginLeft: "30px" }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Body;
