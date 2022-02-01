import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const HooksIceCream = () => {
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCreams);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>no of ice creams: {noOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy ice cream</button>
    </div>
  );
};

export default HooksIceCream;
