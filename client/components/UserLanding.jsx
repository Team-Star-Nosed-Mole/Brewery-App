import React, { useEffect, useState, useContext } from 'react';
import StateBreweries from './StateBreweries';
import VisitedBreweries from './VisitedBreweries';
import UserContext from './UserDetails';
import axios from 'axios';

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
          console.log('TRYING TO GRAB STATE BREWERIES');
          const response = await axios.get('/api', {
            params: { state: user.state, id: user.usersid },
          });
          // console.log(response.data);
          // console.log(`getBreweries response data: ${response.data}`);
          //Stated Brews - Array of Objects
          console.log(
            // `getBreweries state brews: ${response.data.getBreweries[0].name}`
            `getBreweries state brews: ${response.data.getBreweries[0]}`
          );
          console.log(response.data.getBreweries);
          //Visited Brews - rows field within contain each record
          // console.log(
          //   `getBreweries visited brews: ${response.data.visited[0].breweryname}`
          // );

          console.log(`GRABBED STATE BREWERIES`);
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
    axios.post('/visited/add', {
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
