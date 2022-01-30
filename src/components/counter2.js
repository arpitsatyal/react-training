import React, { useState } from "react";

const counter2 = () => {
  const [counter, setCounter] = useState(0);

  const button = {
    backgroundColor: "#EA4C89",
    borderRadius: "8px",
    borderStyle: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "inlineblock",
    fontSize: "14px",
    fontWeight: "500",
    height: "40px",
    lineHeight: "20px",
    padding: "10px 16px",
    textAlign: "center",
    marginRight: "30px",
  };

  const text = {
    fontFamily: "'Supermercado One', cursive",
  };

  return (
    <div style={{ margin: "100px 600px" }}>
      <h1 style={text}>React Counter demo</h1>
      <button style={button} onClick={setCounter(handleClick('add'))}>
        +
      </button>
      <span style={text}>{counter}</span>
      <button
        style={{ ...button, marginLeft: "30px" }}
        onClick={setCounter(handleClick('subtract'))}
      >
        -
      </button>
    </div>
  );
};

export default counter2;
