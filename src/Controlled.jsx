import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  console.log("Controlled");
  return (
    <div>
      <h1>Controlled: {name}</h1>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
      />{" "}
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Controlled;
