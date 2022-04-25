import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';

const Brewery = (props) => {
  const user = useContext(UserContext);
  const { name, street, address_2 } = props;
  // const brewery = props.brewery;
  // console.log(test_array);

  return (
    <>
      <div>
        <span>Name: {name}</span>
        <span>Location: {street}</span>
        <span>Rating: {address_2}</span>
      </div>
    </>
  );
};

export default Brewery;
