import React from "react";
import { StudentsAll } from "../Context/Students";

const Body = () => {
  const [students] = StudentsAll();

  return (
    <div style={{ background: "#35d7e3" }}>
      <h1>Studens List {students.length}</h1>
      {students.map((s) => {
        return <h2 key={s.id}>{s.name}</h2>;
      })}
    </div>
  );
};

export default Body;
