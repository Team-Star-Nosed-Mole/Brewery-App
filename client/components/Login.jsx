import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

  function loginClick() {
    navigate('/home');
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <button className="login-btn" onClick={() => loginClick()}>
        Login
      </button>
      {/* <Link to="/home">Home</Link>  */}
    </div>
  );
};

export default Login;
