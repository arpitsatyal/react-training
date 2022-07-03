import { memo } from "react";

function Count(props) {
  console.log("Count rendering");
  return (
    <div>
      {props.text} is {props.count}
    </div>
  );
}
export default memo(Count);
