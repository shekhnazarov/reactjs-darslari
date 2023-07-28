import React from "react";
import ReactDOM from "react-dom/client"
// import Root from "./Root/root"
// import Context from "./Context/context";
// import Body from "./Components/body";
import "./index.css"
import Controlled from "./Controlled";
import UnControlled from "./UnControlled";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Controlled />
      <UnControlled />
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
