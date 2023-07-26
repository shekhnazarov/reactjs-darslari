import React, { useContext } from "react";
import { StudentContext } from "../context";

const Navbar = () => {
  const [students, setStudents] = useContext(StudentContext);
  console.log(students);
  return (
    <div
      style={{
        background: "green",
        color: "white",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>Students {students.length}</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Company</h1>
      <h1>Contacts</h1>
    </div>
  );
};

export default Navbar;
