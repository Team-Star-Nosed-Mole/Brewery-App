import React, { useEffect, useState, useContext } from 'react';
import StateBreweries from './StateBreweries';
import VisitedBreweries from './VisitedBreweries';
import UserContext from './UserDetails';
import axios from 'axios';

const UserLanding = () => {
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
          console.log(response.data);
          console.log(`getBreweries response data: ${response.data}`);
          //Stated Brews - Array of Objects
          console.log(
            `getBreweries state brews: ${response.data.getBreweries[0].name}`
          );
          //Visited Brews - rows field within contain each record
          console.log(
            `getBreweries visited brews: ${response.data.visited[0].breweryname}`
          );

          console.log(`GRABBED STATE BREWERIES`);
          setStateBreweries(response.data.getBreweries);
          setVisBreweries(response.data.visited);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getBreweries();
    // getVisitedBreweries();
  }, []);

  if (stateBreweries) {
    return (
      <div className="userlanding">
        <StateBreweries stateBreweries={[...stateBreweries]} />
        <VisitedBreweries visBreweries={[...visBreweries]} />
      </div>
    );
  }
};

export default UserLanding;
