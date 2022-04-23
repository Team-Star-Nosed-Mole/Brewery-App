import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="createuser">
      <h1>Create User</h1>
      {/* <Link to="/home">Home</Link>  */}
    </div>
  );
};

export default Login;
