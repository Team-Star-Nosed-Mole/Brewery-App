import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import UserContext from './UserDetails';

const Home = () => {
  let navigate = useNavigate();
  const user = useContext(UserContext);
  console.log(user);

  //If user is already logged in via coolies/storage (TBD by Colton) then redirect to their landing page
  useEffect(() => {
    if (user) {
      navigate('/userlanding');
    }
  }),
    [];

  function loginClick() {
    navigate('/login');
  }

  function createClick() {
    navigate('/createuser');
  }

  if (!user) {
    return (
      <div className="home">
        <button className="login-btn" onClick={() => loginClick()}>
          Login
        </button>
        <button className="create-btn" onClick={() => createClick()}>
          Create User
        </button>
        {/* <Link to="/home">Home</Link>  */}
      </div>
    );
    // } else {
    //   // <Redirect to="/userlanding" />;
    //   navigate('/createuser');
    // }
  }
};

export default Home;
