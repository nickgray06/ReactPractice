import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Employee } from "./Employee";
import axios from "axios";

export const Employees = () => {
  const [employees, setEmployee] = useState([]);
  // const Employees = () => {
  //   setEmployee(res.data);
  // };
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees")
      .then((result) => setEmployee(result.data));
  }, []);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [addFlag, setAddFlag] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [update, setUpdate] = useState(false);

  let [empToBeUpdated, setEmpToBeUpdated] = useState({
    id: 0,
    name: "",
    designation: "",
  });

  const addEmployee = (e) => {
    e.preventDefault();
    setSuccess("");
    if (name === "" || designation === "") {
      setMessage("Please Enter Values");
    } else {
      setMessage("");
      setAddFlag(false);
      let newEmployee = { name: name, designation: designation };
      axios.post("http://localhost:4000/employees", newEmployee).then((res) => {
        setEmployee([...employees, res.data]);
        setSuccess(`New employee has been added with the id ${res.data.id}`);
      });
      setName("");
      setDesignation("");
    }
  };

  const findEmployee = (id) => {
    let emp = employees.find(function(el) {
      return el.id == id;
    });
    console.log(emp);
    setEmpToBeUpdated(emp);
  };

  const updateEmpl = (e) => {
    e.preventDefault();
    axios
      .put(
        "http://localhost:4000/employees/" + empToBeUpdated.id,
        empToBeUpdated
      )
      .then((res) => {
        let index = employees.findIndex(
          (employee) => employee.id == empToBeUpdated.id
        );
        let temp = [...employees];
        temp[index] = res.data;
        setEmployeegit(temp);
        setMessage("Employee Updated Successfully!");
      })
      .catch(() => {
        setMessage("Something went wrong!");
      });
  };

  const deleteEmployee = (empId) => {
    setSuccess("");
    let employeeId = parseInt(empId);
    axios
      .delete("http://localhost:4000/employees/git " + employeeId)
      .then((res) => {
        axios.get("http://localhost:4000/employees").then((res) => {
          setEmployee(res.data);
        });
      });
  };
  return (
    <>
      <table style={{ width: "60%" }} className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => {
              return (
                <tr key={employee.empId}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>
                    <button onClick={() => deleteEmployee(employee.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <div>No Data Found</div>
          )}
        </tbody>
      </table>
      <p>
        {" "}
        <button onClick={() => setUpdate(true)}>Update Employee</button>
      </p>
      {update ? (
        <form>
          <p>
            Employee ID <br />
            <select
              onChange={(e) => {
                findEmployee(e.target.value);
              }}
            >
              <option value="">Select</option>
              {employees.map((employee) => {
                return (
                  <option key={employee.id} value={employee.id}>
                    {employee.id}
                  </option>
                );
              })}
            </select>
          </p>
          <p>
            {" "}
            Name <br />
            <input
              value={empToBeUpdated.name}
              onChange={(e) => {
                setEmpToBeUpdated({ ...empToBeUpdated, name: e.target.value });
              }}
            />
          </p>
          <p>
            {" "}
            Designation <br />
            <input
              value={empToBeUpdated.designation}
              onChange={(e) => {
                setEmpToBeUpdated({
                  ...empToBeUpdated,
                  designation: e.target.value,
                });
              }}
            />
          </p>
          <p>
            {" "}
            <button
              onClick={(e) => {
                updateEmpl(e);
              }}
            >
              Update
            </button>{" "}
          </p>
        </form>
      ) : null}
      <p>{message}</p>
      <button onClick={() => setAddFlag(!addFlag)} className="btn btn-primary">
        Add Employee
      </button>{" "}
      <br /> <br />
      <div className="text-success">{success}</div>
      {addFlag ? (
        <form>
          EmpName:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setMessage("");
            }}
          />{" "}
          <br /> <br />
          Designation:{" "}
          <input
            type="text"
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
              setMessage("");
            }}
          />{" "}
          <br /> <br />
          <button className="btn btn-primary" onClick={addEmployee}>
            Add
          </button>
          <div className="text-danger">{message}</div>
        </form>
      ) : null}
      {/* <Employee
        employees={employees}
        addEmployee={addEmployee}
        deleteEmployee={deleteEmployee}
      /> */}
    </>
  );
};
