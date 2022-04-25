import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserDetails';
import Brewery from './Brewery';
import axios from 'axios';

const StateBreweries = (props) => {
  // const [stateBreweries, setStateBreweries] = useState();
  const user = useContext(UserContext);
  const addStateToVisited = props.addStateToVisited;
  const stateBreweries = props.stateBreweries;

  // console.log(addStateToBreweries);
  // console.log(`In State Breweries: ${stateBreweries}`);

  //Destructure stateBreweries from UserLanding

  // useEffect( () => {
  //   //Query user's state breweries

  //   const getStateBreweries = async () => {
  //     if (user) {
  //       try {
  //         console.log('TRYING TO GRAB STATE BREWERIES');
  //         const response = await axios.get('/api', {
  //           params: { state: user.state },
  //         });
  //         console.log(response.data);

  //         console.log(`GRABBED STATE BREWERIES`);
  //         setStateBreweries(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };
  //   getStateBreweries();
  // }, []);

  const stateBreweriesArray = stateBreweries.map((brewery, index) => {
    return (
      <Brewery
        {...brewery} //passing all of the properties down for each brewery
        addStateToVisited={addStateToVisited}
        id={`StateBrewery${index}`}
        key={`StateBrewery${index}`}
      />
    );
  });
  return (
    <div>
      <h2>State Breweries</h2>
      {stateBreweriesArray}
    </div>
  );

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
