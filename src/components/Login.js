import userEvent from "@testing-library/user-event";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";

export const Login = () => {
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameRef.current.value === "" || passwordRef.current.value === "") {
      setError("Enter username and password");
      setSuccess("");
    } else {
      setSuccess("Login Succeesful");
      setError("Error");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              ref={nameRef}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "40%" }}
              type="password"
              id="pwd"
              ref={passwordRef}
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {success ? <div className="text-success">{success}</div> : null}
          {error ? <div className="text-danger">{error}</div> : null}
        </form>
      </div>
    </>
  );
};