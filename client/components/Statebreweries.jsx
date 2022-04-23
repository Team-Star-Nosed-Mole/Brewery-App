import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';
import Brewery from './Brewery';

const StateBreweries = (props) => {
  const user = useContext(UserContext);

  return (
    <>
      <div>
        <h2>State Breweries</h2>
        <Brewery />
        <Brewery />
        <Brewery />
        <Brewery />
        <Brewery />
      </div>
    </>
  );
};

export default StateBreweries;
