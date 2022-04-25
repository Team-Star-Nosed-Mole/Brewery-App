import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [homestate, setHomeState] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  let navigate = useNavigate();

  // function loginClick() {
  //   navigate('/home');
  // }

  const handleSubmit = async (e) => {
    e.preventDefault(); //So that form submission doesn't trigger a page refresh
    const user = { username, password };
    try {
      const response = await axios.post('/createUser', {
        newUser: {
          username: username,
          password: password,
          homestate: homestate,
          firstname: firstname,
          lastname: lastname,
        },
      });
      navigate('/');
    } catch (error) {
      console.log(error);
      navigate('/createuser');
    }
  };

  return (
    <div>
      <h1>Join Up and Drink Up</h1>

      <div>
        <form className="createuser" onSubmit={handleSubmit}>
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
          <div>
            <input
              name="homestate"
              type="text"
              placeholder="home state"
              onChange={({ target }) => setHomeState(target.value)}
            ></input>
          </div>
          <div>
            <input
              name="firstname"
              type="text"
              placeholder="firstname"
              onChange={({ target }) => setFirstName(target.value)}
            ></input>
          </div>
          <div>
            <input
              name="firstname"
              type="text"
              placeholder="lastname"
              onChange={({ target }) => setLastName(target.value)}
            ></input>
          </div>

          <input type="submit" value="Create User"></input>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
