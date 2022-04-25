import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';

const Brewery = (props) => {
  const user = useContext(UserContext);
  const breweryComp = props.breweryComp;
  let bAttribs = {};

  if (breweryComp === 'state') {
    //State Component props
    bAttribs.name = props.name;
    bAttribs.id = props.id;
    bAttribs.brewery_type = props.brewery_type;
    bAttribs.state = props.state;
    bAttribs.city = props.city;
    bAttribs.phone = props.phone;
    bAttribs.street = props.street;
    bAttribs.street = props.street;
    bAttribs.address_2 = props.address_2;
    bAttribs.addStateToVisited = props.addStateToVisited;
  } else {
    //Visited Breweries Component props
    bAttribs.id = props.id;
    bAttribs.usersid = props.usersid;
    bAttribs.breweryname = props.breweryname;
    bAttribs.brewerytype = props.brewerytype;
    bAttribs.brewerystate = props.brewerystate;
    bAttribs.brewerycity = props.brewerycity;
    bAttribs.breweryphone = props.breweryphone;
    bAttribs.removeVisited = props.removeVisited;
  }

  //Conditional logic for type of component want to render

  if (breweryComp === 'state') {
    //render state component brewery
    return (
      <>
        <div>
          <span>Name: {bAttribs.name}</span>
          <span>Location: {bAttribs.street}</span>
          <span>Rating: {bAttribs.address_2}</span>
          <button
            onClick={(e) => {
              bAttribs.addStateToVisited({
                id: bAttribs.id,
                name: bAttribs.name,
                brewery_type: bAttribs.brewery_type,
                state: bAttribs.state,
                city: bAttribs.city,
                phone: bAttribs.phone,
                // usersid: user.usersid,
              });
            }}
          >
            Add to Visited
          </button>
        </div>
      </>
    );
  } else {
    //render visited component brewery
    return (
      <>
        <div>
          <span>Name: {bAttribs.breweryname}</span>
          <span>State: {bAttribs.brewerystate}</span>
          <span>City: {bAttribs.brewerycity}</span>
          <button
            onClick={(e) => {
              // console.log('Remove Visited - Function');
              // console.log(bAttribs.removeVisited);
              bAttribs.removeVisited({
                id: bAttribs.id,
                name: bAttribs.breweryname,
                brewery_type: bAttribs.brewerytype,
                state: bAttribs.brewerystate,
                city: bAttribs.brewerycity,
                phone: bAttribs.breweryphone,
              });
            }}
          >
            Remove
          </button>
        </div>
      </>
    );
  }
};

export default Brewery;
