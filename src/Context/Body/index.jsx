import React, { useContext } from "react";
import { StudentContext } from "../context";

const Body = () => {
  const [students, setStudents] = useContext(StudentContext);

  const onDelete = (id) => {
    let res = students.filter((s) => s.id !== id);
    setStudents(res);
  };
  return (
    <div style={{ background: "yellow" }}>
      <h2>Students List {students.length}</h2>
      {students.map((s) => {
        return (
          <h3 key={s.id}>
            Name: {s.name}{" "}
            <button style={{ margin: "0 10px" }} onClick={() => onDelete(s.id)}>
              delete
            </button>
          </h3>
        );
      })}
    </div>
  );
};

export default Body;
