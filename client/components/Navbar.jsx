import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';

const Navbar = (props) => {
  const user = useContext(UserContext);

  return (
    <>
      <nav>
        <h2>NAV BAR</h2>
      </nav>
    </>
  );
};

export default Navbar;
