import logo from "./logo.svg";
import "./App.css";
import React from "react";

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
  return (
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
  );
}

export default App;
