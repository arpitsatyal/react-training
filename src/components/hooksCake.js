import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { Link } from "react-router-dom";

const HooksCake = () => {
  const [number, setNumber] = useState(1);
  //for state
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  //for dispatch functions
  const dispatch = useDispatch();
  const linkStyle = {
    paddingLeft: "100px",
  };
  return (
    <div>
      <Link to="/counter" style={linkStyle}>
        counter
      </Link>
      <Link to="/list" style={linkStyle}>
        list
      </Link>
      <Link to="/ice-cream" style={linkStyle}>
        ice cream
      </Link>

      <h2>no of cakes: {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        buy {number} Cake
      </button>
    </div>
  );
};

export default HooksCake;
