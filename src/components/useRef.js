import { useState, useRef, useEffect } from "react";

const RefHook = () => {
  const [name, setName] = useState("");
  // useRef doesnt cause the component to re render after value is changed, unlike useState
  //useEffect runs everytime the app renders.
  // if we add dependencies to useEffect then it will only run when those dependencies change
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef("");
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  }, [name]);

  function focus() {
    inputRef.current.focus(); //gives html input element
  }
  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        my name is {name} and my name was {prevName.current}{" "}
      </div>
      <div>I rendered {renderCount.current} times!!</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default RefHook;
