import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';
import Brewery from './Brewery';

const VisitedBreweries = (props) => {
  const visBreweries = props.visBreweries;

  const visBreweriesArray = visBreweries.map((brewery, index) => {
    return (
      <Brewery
        // name={brewery.name}
        // street={brewery.street}
        // test_array={[...test_array]}
        {...brewery}
        id={`VisBrewery${index}`}
        key={`VisBrewery${index}`}
      />
    );
  });
  return (
    <div>
      <h2>Visited Breweries</h2>
      {visBreweriesArray}
    </div>
  );
};

export default VisitedBreweries;
