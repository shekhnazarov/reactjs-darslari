import React, { useState } from "react";
import Navbar from "./Navbar";
import Body from "./Body";

const Context = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Body />
    </div>
  );
};

export default Context;
