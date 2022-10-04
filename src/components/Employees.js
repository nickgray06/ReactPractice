import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Employee } from "./Employee";

export const Employees = () => {
  const [employees, setEmployee] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);
  const addEmployee = () => {
    setEmployee([
      ...employees,
      { empId: 6789, name: "Sam", designation: "TL" },
    ]);
  };
  return (
    <>
      <Employee employees={employees} addEmployee={addEmployee} />
    </>
  );
};
