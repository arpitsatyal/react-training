import { useState, useEffect } from "react";

const EpicCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("use effect called.");
  }, []);

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

  const handleClick = (operation) =>
    operation === "add"
      ? setCounter((prev) => prev + 1)
      : setCounter((prev) => prev - 1);

  return (
    <div style={{ margin: "100px 600px" }}>
      <h1 style={text}>React Counter demo</h1>
      <button style={button} onClick={() => handleClick("add")}>
        +
      </button>
      <span style={text}>{counter}</span>
      <button
        style={{ ...button, marginLeft: "30px" }}
        onClick={() => handleClick("subtract")}
      >
        -
      </button>
    </div>
  );
};

export default EpicCounter;
