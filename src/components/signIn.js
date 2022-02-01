import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function logTheUserIn() {
    dispatch(login());
    navigate('/');

  }
  return <div>
      <p>Sign In</p>
      <button onClick={() => logTheUserIn()}>click me to login</button>
  </div>;
};

export default Login;
