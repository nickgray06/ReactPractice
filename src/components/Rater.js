import "../css/rating.css";

import React from "react";

export default function Rater(props) {
  let items = [];
  for (let i = 1; i < props.maxlength; i++) {
    let clickHandler = props.onSelected && props.onSelected.bind(null, i);
    items.push(
      <li
        key={i}
        className={i <= props.value ? "filled" : ""}
        on
        onClick={clickHandler}
      >
        {"\u2605"}
      </li>
    );
  }
  return <ul className="rating">{items}</ul>;
}
