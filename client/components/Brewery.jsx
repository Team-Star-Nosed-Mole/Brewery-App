import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';

const Brewery = () => {
  const user = useContext(UserContext);

  return (
    <>
      <div>
        <span>Name:</span>
        <span>Location:</span>
        <span>Rating:</span>
      </div>
    </>
  );
};

export default Brewery;
