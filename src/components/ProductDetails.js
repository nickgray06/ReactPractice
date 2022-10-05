import React from "react";
import Product from "./Product";

export default function ProductDetails() {
  return (
    <div>
      <Product {...productDetails} />
    </div>
  );
}
