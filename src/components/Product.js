import React from "react";
import logo from "../logo.svg";
import Rater from "./Rater";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product() {
  return (
    <div className="thumbnail" style={{ textAlign: "center" }}>
      <div className="row>">
        <div className="col-sm-6">
          <img src={logo} alt="" className="img img-rounded img-responsive" />
        </div>
        <div className="col-sm-6">
          <div className={"caption"}>
            <a href={"/productDetails"}>
              <h3>Gamia Laptop</h3>
            </a>
            <h4>
              <span style={{ color: "red" }}>Rs. 33000</span>
            </h4>
            <p>An excellent choice for an awesome gaming experience.</p>
            <Rater />
            <span style={{ fontSize: "9px" }}>3/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
