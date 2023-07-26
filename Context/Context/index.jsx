import React from "react";
import Students from "./Students";
import Company from "./Company";
import Factory from "./Factory";
import Department from "./Department";

const Context = ({ children }) => {
  return (
    <Students>
      <Company>
        <Factory>
          <Department>{children}</Department>
        </Factory>
      </Company>
    </Students>
  );
};

export default Context;
