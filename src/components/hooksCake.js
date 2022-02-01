import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const HooksCake = () => {
  const [number, setNumber] = useState(1);
  //for state
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  //for dispatch functions
  const dispatch = useDispatch();
  return (
    <div>
      <h2>no of cakes: {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>buy {number} Cake</button>
    </div>
  );
};

export default HooksCake;
