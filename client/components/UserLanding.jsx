import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserLanding = () => {
  let navigate = useNavigate();

  return (
    <div className="userlanding">
      <h1>Hello User</h1>
      {/* <Link to="/home">Home</Link>  */}
    </div>
  );
};

export default UserLanding;
