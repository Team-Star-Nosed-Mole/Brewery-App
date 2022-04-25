import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from './UserDetails';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //So that form submission doesn't trigger a page refresh

    // send the username and password to the server
    try {
      const response = await axios.post('/login', {
        userInfo: {
          username: username,
          password: password,
        },
      });
      // navigate('/home'); if successfull, send to UserLanding route
    } catch (error) {
      console.log(error);
    }
    // params: { userId: user.usersid }, //Having trouble sending over user id as separate params
  };

  return (
    <div className="login">
      <h1>Login</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="username"
              type="text"
              placeholder="username"
              onChange={({ target }) => setUsername(target.value)}
            ></input>
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={({ target }) => setPassword(target.value)}
            ></input>
          </div>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
