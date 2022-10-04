import React from "react";
import { Table } from "react-bootstrap";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function DefectTracker() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <div className="container" style={{ textAlign: "center", border: "solid" }}>
      <h1>Defect Tracker</h1>
      <a href="">Logout</a>
      <br />
      <span>
        <a href="">Add Defect </a>
        <a href="">View Defects</a>
      </span>
      <div className="container" style={{ border: "solid", padding: "10px" }}>
        <form>
          <h2>Filter Details</h2>
          <label for="all">Priority</label>{" "}
          <span>
            <input name="all" list="all" placeholder="All" />
            <datalist id="all">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
            </datalist>
          </span>
          <br />
          <br />
          <label for="all">Category</label>{" "}
          <span>
            <input name="all" list="all" placeholder="All" />
            <datalist id="all">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
            </datalist>
          </span>
        </form>
      </div>
      <h2>Defect Details</h2>
      <p style={{ color: "red" }}>Search Results: 3</p>
      <Table bordered hover responsive="sm">
        <thead>
          <tr>
            <th className="text-white bg-primary">Defect Category</th>
            <th className="text-white bg-primary">Description</th>
            <th className="text-white bg-primary">Priority</th>
            <th className="text-white bg-primary">Status</th>
            <th className="text-white bg-primary">Change Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-light">fasldkfaklsfjaklfa</td>
            <td className="bg-light">laksdlkfajsdklfjakjf</td>
            <td className="bg-light">laksdjfkasjfdkadkl</td>
            <td className="bg-light">laksdjfkasjfdkadkl</td>
            <td className="bg-light">laksdjfkasjfdkadkl</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
