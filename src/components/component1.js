import React from "react";
import Component2 from "./component2";

const Component1 = ({ myArr }) => {
  return (
    <>
      <div>divsion from child component1: {myArr.map((el) => el / 2)}</div>
      <Component2 myArr={myArr} />
    </>
  );
};

export default Component1;
