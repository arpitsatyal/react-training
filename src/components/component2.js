import { Component } from "react";

class Component2 extends Component {
  render() {
    return (
      <div>
        multiplication from child component2:{" "}
        {this.props.myArr.map((el) => el * 2)}
      </div>
    );
  }
}

export default Component2;
