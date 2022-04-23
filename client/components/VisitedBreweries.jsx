import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';
import Brewery from './Brewery';

const VisitedBreweries = (props) => {
  const user = useContext(UserContext);

  return (
    <>
      <div>
        <h2>Visited Breweries</h2>
        <Brewery />
        <Brewery />
        <Brewery />
        <Brewery />
        <Brewery />
      </div>
    </>
  );
};

export default VisitedBreweries;
