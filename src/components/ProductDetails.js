// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Product from "./Product";

// export default function ProductDetails() {
//   const [productDetails, setProductDetails] = useState([]);
//   const [error, setError] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/products.json")
//       .then((response) => setProductDetails(response.data))
//       .catch((error) => setError(error));
//   }, []);
//   console.log(productDetails);
//   let product = productDetails.map((productDetail) => productDetail);
//   console.log(product);

//   return (
//     <div>
//       {productDetails.map((productDetail) => (
//         <Product {...productDetail} />
//       ))}
//     </div>
//   );
// }
