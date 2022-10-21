import React from "react";
import logo from "../logo.svg";
import Rater from "./Rater";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product(props) {
  const {
    pdtCode,
    pdtPrice,
    pdtName,
    pdtImage,
    pdtDescription,
    avgFeedback: rating,
  } = props.productDetail;

  return (
    <div className="thumbnail" style={{ textAlign: "center" }}>
      <div className="row>">
        <div className="col-sm-6">
          <img
            src={pdtImage}
            alt=""
            className="img img-rounded img-responsive"
          />
        </div>
        <div className="col-sm-6">
          <div className={"caption"}>
            <a href={`/productDetails/${pdtCode}`}>
              <h3>{pdtName}</h3>
            </a>
            <h4>
              <span style={{ color: "red" }}>Rs. {pdtPrice}</span>
            </h4>
            {props.status ? (
              <h5 style={{ color: "red", "font-weight": "bold" }}>
                This product is discontinued.
              </h5>
            ) : (
              <p className="description">{pdtDescription}</p>
            )}
            <Rater value={rating} maxlength="6" />
            &nbsp;&nbsp;
            <span style={{ fontSize: "9px" }}>{rating}/5</span>
          </div>
          <br />
        </div>
      </div>{" "}
      <br />
    </div>
  );
}
