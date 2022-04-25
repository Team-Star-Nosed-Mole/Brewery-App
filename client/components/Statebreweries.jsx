import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';
import Brewery from './Brewery';
import axios from 'axios';
import { UNSAFE_NavigationContext } from 'react-router-dom';

const StateBreweries = (props) => {
  const [stateBreweries, setStateBreweries] = useState();
  const user = useContext(UserContext);

  useEffect(() => {
    //Query user's state breweries

    const getStateBreweries = async () => {
      if (user) {
        try {
          console.log('TRYING TO GRAB STATE BREWERIES');
          const response = await axios.get('/api', {
            params: { state: user.state },
          });
          console.log(response.data);

          console.log(`GRABBED STATE BREWERIES`);
          setStateBreweries(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getStateBreweries();
  }, []);

  if (stateBreweries) {
    const test_array = [1, 2, 3];
    const stateBreweriesArray = stateBreweries.map((brewery, index) => {
      return (
        <Brewery
          // name={brewery.name}
          // street={brewery.street}
          test_array={[...test_array]}
          {...brewery}
          id={`Brewery${index}`}
          key={`Brewery${index}`}
        />
      );
    });
    return <div>{stateBreweriesArray}</div>;
  }

  // return (
  //   <>
  //     <div>
  //       <h2>State Breweries</h2>
  //       <h2>Test</h2>
  //     </div>
  //   </>
  // );
};

export default StateBreweries;
