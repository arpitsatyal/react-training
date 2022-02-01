import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Demo from "./components/list";
import Counter2 from "./components/counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import HooksCake from "./components/hooksCake";
import HooksIceCream from "./components/hooksIceCream";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth";
import SignIn from "./components/signIn";
import ErrorPage from "./components/404";

function App() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route element={<Auth />}>
          <Route path="/" element={<HooksCake />} />
          <Route path="/counter" element={<Counter2 />} />
          <Route path="/list" element={<Demo />} />
          <Route path="/c1/:num" element={<Component1 myArr={arr} />} />
          <Route path="/c2" element={<Component2 myArr={arr} />} />
          <Route path="/ice-cream" element={<HooksIceCream />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
