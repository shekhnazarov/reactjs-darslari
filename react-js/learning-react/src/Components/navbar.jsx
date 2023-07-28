import React, { memo } from "react";

const Navbar = (props) => {
  console.log("navbar render");
  return (
    <div
      style={{
        background: "green",
        color: "white",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1>{props.obj.title}</h1>
      <h1>{props.callback("Home")}</h1>
      <h1>{props.callback("About")}</h1>
      <h1>Services</h1>
      <h1>Contacts</h1>
    </div>
  );
};

// export default memo(Navbar);
export default memo(Navbar);
