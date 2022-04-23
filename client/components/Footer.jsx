import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';

const Footer = (props) => {
  const user = useContext(UserContext);

  return (
    <>
      <footer>
        <h2>FOOTER</h2>
      </footer>
    </>
  );
};

export default Footer;
