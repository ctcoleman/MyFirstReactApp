// Sec 1. in README.md
import React, { useState } from "react"; // 1 in README.md

function Button(props) {
  // 2 in README.md
  const handleClick = () => props.onClickFunction(props.value); // 3/4 in README.md
  return (
    // 5/6 in README.md
    <button onClick={handleClick}>{props.value}</button>
  );
}

export default Button; // 7 in README.md
