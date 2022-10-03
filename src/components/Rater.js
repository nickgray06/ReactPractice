import "../css/rating.css";

import React from "react";

export default function Rater() {
  return (
    <ul className="rating">
      <li className="filled">{"\u2605"}</li>
      <li className="filled">{"\u2605"}</li>
      <li className="filled">{"\u2605"}</li>
      <li>{"\u2605"}</li>
      <li>{"\u2605"}</li>
    </ul>
  );
}
