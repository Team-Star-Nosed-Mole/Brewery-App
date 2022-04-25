import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';

const Brewery = (props) => {
  const user = useContext(UserContext);
  const {
    name,
    id,
    brewery_type,
    state,
    city,
    phone,
    street,
    address_2,
    addStateToVisited,
    removeVisited,
  } = props;
  // const brewery = props.brewery;
  // console.log(test_array);

  //Probably can use conditional logic on buttons

  return (
    <>
      <div>
        <span>Name: {name}</span>
        <span>Location: {street}</span>
        <span>Rating: {address_2}</span>
        <button
          onClick={(e) => {
            console.log(e);
            //Using conditional logic to differentiate between functionality
            //adding state to visited for State component
            //removeVisited for visited breweries component
            if (addStateToVisited) {
              addStateToVisited({
                id: id,
                name: name,
                brewery_type: brewery_type,
                state: state,
                city: city,
                phone: phone,
              });
            } else {
              console.log('ricky');
              //removeVisited - have to bring in functionality --
            }
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Brewery;

// console.log(`breweryDetails.id: ${breweryDetails.id}`);
// console.log(`breweryDetails.name: ${breweryDetails.name}`);
// console.log(`breweryDetails.type: ${breweryDetails.brewery_type}`);
// console.log(`breweryDetails.state: ${breweryDetails.state}`);
// console.log(`breweryDetails.city: ${breweryDetails.city}`);
// console.log(`breweryDetails.phone: ${breweryDetails.phone}`);
