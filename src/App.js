import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Typography } from "@mui/material";
import { Button as Button1 } from "@mui/material";
import Product from "./components/Product";
import DefectTracker from "./components/DefectTracker";
import { Employees } from "./components/Employees";
import Card from "./components/Card";

function App() {
  // return React.createElement(
  //   "form",
  //   {},
  //   React.createElement("h1", {}, "Login"),
  //   React.createElement("input", {
  //     type: "text",
  //     placeholder: "Name",
  //     value: "",
  //   }),
  //   React.createElement("br", {}),
  //   React.createElement("br", {}),
  //   React.createElement("input", {
  //     type: "password",
  //     placeholder: "password",
  //     value: "",
  //   }),
  //   React.createElement("br", {}),
  //   React.createElement("br", {}),
  //   React.createElement("button", { type: "submit" }, "Login")
  // );
  let count = 5;
  let name = {
    firstName: "John",
    lastName: "Doe",
  };
  let highlight = {
    color: "blue",
    backgroundColor: "gray",
  };
  var x = 25,
    y = 30;
  let element = null;
  let isLoggedIn = false;
  if (isLoggedIn) {
    element = <h2>Welcome Admin</h2>;
  } else {
    element = <h2>Please Log In</h2>;
  }
  var employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ];
  return (
    <>
      <DefectTracker />
      <Employees />
      <Product />
      <Card />
      <h1 style={{ color: "green" }}>Welcome to React</h1>
      <h1 style={{ color: "blue" }}>Welcome to the Jungle</h1>
      <h1 style={{ color: "yellow" }}>Not all fun and games</h1>
      <h1 style={{ color: "teal" }}> Is Teal a color</h1>
      <h1 style={{ color: "red" }}> Is Red a color</h1>
      <h1 style={{ color: "orange" }}> Is a color</h1>
      <h1 style={{ color: "purple" }}> Rockies puirple</h1>
      <h1 style={{ color: "grey" }}> Rockies grey</h1>
      <button className="button">Submit</button>
      <button className="btn btn-success">Submit</button>
      <Button variant="warning">Click here</Button>
      <Typography variant="h4" gutterBottom>
        Welcome to React
      </Typography>
      <Button1 variant="contained" color="primary">
        Submit
      </Button1>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {element}
      <h2>Evaluating Expression</h2>
      <h3>
        {x}
        {">"}
        {y}
        {":"}
        {x > y ? "True" : "False"}
      </h3>
      <h1 style={highlight}>Welcome to React</h1>
      <h1>
        {name.firstName} {name.lastName}
      </h1>
      <h1>{count}</h1>
      <h2>{count * count}</h2>
      <h3>ReactJS:</h3>
      <img src={logo} width="120" height="120" alt="" />
      <p> React is a JavaScript library for creating User Interfaces.</p>
      <form>
        <h2>Login</h2>
        <input type="text" placeholder="Name" />
        <br />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <br />
        <input type="submit" nvalue="log" />
      </form>
    </>
  );
}

export default App;
