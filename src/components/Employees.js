import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Employee } from "./Employee";
import axios from "axios";

export const Employees = () => {
  const [employees, setEmployee] = useState([]);
  const addEmployee = () => {
    setEmployee([
      ...employees,
      { empId: 6789, name: "Sam", designation: "TL" },
    ]);
  };
  useEffect(() => {
    axios.get("employees.json").then((result) => setEmployee(result.data));
  }, []);
  return (
    <>
      <Employee employees={employees} addEmployee={addEmployee} />
    </>
  );
};
