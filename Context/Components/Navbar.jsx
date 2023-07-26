import React, { useContext } from "react";
import { StudentsContext } from "../Context/Students";

const Navbar = () => {
  const [students, setStudents] = useContext(StudentsContext);
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
      <h1>Students {students.length}</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Sevices</h1>
      <h1>Contact</h1>
    </div>
  );
};

export default Navbar;
