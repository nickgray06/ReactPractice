import React from "react";
import Content from "./Content";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card() {
  return (
    <>
      <Content>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <p className="card-text">Thank you for visiting our website</p>
          </div>
        </div>
      </Content>
      <br />
    </>
  );
}
