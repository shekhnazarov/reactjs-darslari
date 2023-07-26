import React from "react";
import Body from "../Components/Body";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Body />
    </div>
  );
};

export default Root;
