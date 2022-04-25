import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from './UserDetails';

const Login = () => {
  let navigate = useNavigate();

  // function loginClick() {
  //   navigate('/home');
  // }

  const handleSubmit = async (e) => {
    e.preventDefault(); //So that form submission doesn't trigger a page refresh
    const user = { username, password };
    // send the username and password to the server
    try {
      const response = await fetch('/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const responseBody = await response.json();
    } catch {}
  };

  return (
    <div className="login">
      <h1>Login Page</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={({ target }) => setUsername(target.value)}
          ></input>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={({ target }) => setPassword(target.value)}
          ></input>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
