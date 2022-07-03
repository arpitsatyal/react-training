import { memo } from "react";

function Button(props) {
  console.log(`Button rendered ${props.children}`);
  return (
    <div>
      <button onClick={props.handleClick}> {props.children} </button>
    </div>
  );
}
export default memo(Button);
