import React, { useEffect, useState, useContext } from 'react';
import StateBreweries from './StateBreweries';
import VisitedBreweries from './VisitedBreweries';
import UserContext from './UserDetails';
import axios from 'axios';
import { parse } from 'ipaddr.js';

const UserLanding = () => {
  //Obtaining state upon user hitting landing page - user's state breweries and visited breweries
  const [stateBreweries, setStateBreweries] = useState();
  const [visBreweries, setVisBreweries] = useState();
  const user = useContext(UserContext);

  useEffect(() => {
    //Query user's state breweries
    const getBreweries = async () => {
      if (user) {
        try {
          const response = await axios.get('/api', {
            params: { state: user.state, id: user.usersid },
          });
          setStateBreweries(response.data.getBreweries);
          setVisBreweries(response.data.visited);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getBreweries();
  }, []);

  const addStateToVisited = async (breweryDetails) => {
    //Add state brewery to visited brewery list
    // console.log(breweryDetails.usersid);
    // console.log(user.usersid);
    const response = await axios.post('/visited/add', {
      addVisited: {
        breweryid: breweryDetails.id,
        breweryname: breweryDetails.name,
        brewerytype: breweryDetails.brewery_type,
        brewerystate: breweryDetails.state,
        brewerycity: breweryDetails.city,
        breweryphone: breweryDetails.phone,
        userId: user.usersid,
      },
      // params: { userId: user.usersid }, //Having trouble sending over user id as separate params
    });

    // setVisBreweries([...response.data.visited]);
    setVisBreweries(JSON.parse(JSON.stringify(response.data.visited)));

    // setVisBreweries(JSON.parse(JSON.stringify(response.data.visited)));
    console.log('ricky');
    console.log(`breweryDetails.id: ${breweryDetails.id}`);
    console.log(`breweryDetails.name: ${breweryDetails.name}`);
    console.log(`breweryDetails.type: ${breweryDetails.brewery_type}`);
    console.log(`breweryDetails.state: ${breweryDetails.state}`);
    console.log(`breweryDetails.city: ${breweryDetails.city}`);
    console.log(`breweryDetails.phone: ${breweryDetails.phone}`);
  };

  const removeVisited = async (breweryDetails) => {
    //Add state brewery to visited brewery list
    axios.post('/visited/delete', {
      addVisited: {
        breweryid: breweryDetails.id,
        breweryname: breweryDetails.name,
        brewerytype: breweryDetails.brewery_type,
        brewerystate: breweryDetails.state,
        brewerycity: breweryDetails.city,
        breweryphone: breweryDetails.phone,
      },
      params: { userId: user.usersid },
    });
    console.log('ricky');
    console.log(`breweryDetails.id: ${breweryDetails.id}`);
    console.log(`breweryDetails.name: ${breweryDetails.name}`);
    console.log(`breweryDetails.type: ${breweryDetails.brewery_type}`);
    console.log(`breweryDetails.state: ${breweryDetails.state}`);
    console.log(`breweryDetails.city: ${breweryDetails.city}`);
    console.log(`breweryDetails.phone: ${breweryDetails.phone}`);
  };

  if (stateBreweries) {
    return (
      <div className="userlanding">
        <StateBreweries
          stateBreweries={[...stateBreweries]}
          addStateToVisited={addStateToVisited}
        />
        <VisitedBreweries
          visBreweries={[...visBreweries]}
          removeVisited={removeVisited}
        />
      </div>
    );
  }
};

export default UserLanding;
