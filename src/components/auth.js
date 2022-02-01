import { Outlet } from "react-router-dom";
import Login from "./signIn";
import  { useSelector } from 'react-redux';

const Auth = () => {
const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Login/>;
};

export default Auth;
