import Component1 from "./components/component1";
import Component2 from "./components/component2";

function App() {
  const arr = [1,2,3,4,5];
  return (
    <div>
      <h1>hello world from parent</h1>
      <Component1 myArr={arr}/>
    </div>
  );
}

export default App;
