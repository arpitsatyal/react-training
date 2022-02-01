import React from "react";
import { connect } from 'react-redux';
import { buyCake } from "../redux/cake/cakeActions";

const Cake = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h2>no of cakes: {numOfCakes}</h2>
      <button onClick={buyCake}>buy Cake</button>
    </div>
  );
};

/**
 *
 * @param {*} state redux state
 * @returns {*object} prop to be used in the component
 */
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  buyCake: () => dispatch(buyCake())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
