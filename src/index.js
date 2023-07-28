import React from "react";
import ReactDOM from "react-dom/client"
// import Root from "./Root/root"
// import Context from "./Context/context";
import Body from "./Components/body";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Body />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
