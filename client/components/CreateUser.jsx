import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setSetState] = useState();
  let navigate = useNavigate();
  console.log('createUser');
  // function loginClick() {
  //   navigate('/home');
  // }

  const handleSubmit = async (e) => {
    e.preventDefault(); //So that form submission doesn't trigger a page refresh
    const user = { username, password };
    // send the username and password to the server
    try {
      const response = await fetch('/createuser', {
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
    <div className='createuser'>
      <h1>Create User Page</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            name='username'
            type='text'
            placeholder='username'
            onChange={({ target }) => setUsername(target.value)}
          ></input>
          <input
            name='password'
            type='password'
            placeholder='password'
            onChange={({ target }) => setPassword(target.value)}
          ></input>
          <input
            name='state'
            type='text'
            placeholder='state'
            onChange={({ target }) => setState(target.value)}
          ></input>

          <input type='submit' value='Create User'></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
