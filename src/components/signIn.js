import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authActions';

const Login = () => {
  const dispatch = useDispatch();
  return <div>
      <p>plz sign in bro...</p>
      <button onClick={() => dispatch(login())}>click me to login</button>
  </div>;
};

export default Login;
