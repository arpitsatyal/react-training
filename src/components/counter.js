import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = { value: 0 };

    this.handleClick = (operation) => {
      operation === "add" ? this.state.value++ : this.state.value--;
      if (this.state.value < 0) this.state.value = 0;
      this.setState({ value: this.state.value })
    };

    this.button = {
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

    this.text = {
      fontFamily: "'Supermercado One', cursive"
    };
  }

  render() {
    return (
        <div style={{ margin: '0 auto', width: '700px', display: 'block' }}>
          <h1 style={this.text}>React Counter demo</h1>
          <button style={this.button} onClick={() => this.handleClick("add")}>
            +
          </button>
          <span style={this.text}>{this.state.value}</span>
          <button
            style={{ ...this.button, marginLeft: "30px" }}
            onClick={() => this.handleClick("subtract")}
          >
            -
          </button>
        </div>
    );
  }
}

export default Counter;
