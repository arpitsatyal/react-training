import { Outlet, Navigate } from "react-router-dom";
import  { useSelector } from 'react-redux';

const Auth = () => {
const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default Auth;
