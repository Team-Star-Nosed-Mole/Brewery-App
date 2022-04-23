import React, { useState, useEffect } from 'react';

const StateBreweries = (props) => {
  // const { favorites, username } = props;
  const [breweries, setSetBreweries] = useState();
  // const [username, setUsername] = useState(props.username);
  // const user = localStorage.getItem('user');

  useEffect(() => {
    console.log('state changed');
    //if user logged in:

    //grab list of state breweries related to that user's state

    try {
    } catch (err) {
      console.log(`Statebreweries component (useEffect): ${err}`);
    }
  }, []);

  //If user logged in...investigate useContext for global variable
  if (loggedIN) {
    const favoritesArray = favorites.map((favObj, index) => {
      return (
        <Brewery
          url={favObj.url}
          name={favObj.name}
          deleteFav={deleteFav}
          id={`Favorite${index}`}
          key={`Favorite${index}`}
        />
      );
    });
    return (
      <div className="sidebar">
        <h2>Favorites</h2>
        <form onSubmit={handleSubmitFav}>
          <input type="hidden" name="username" value={username}></input>
          <input name="favname" type="text" placeholder="Favorite Name"></input>
          <input name="favurl" type="test" placeholder="Favorite URL"></input>
          <input type="submit" value="Add Favorite"></input>
        </form>
        <div id="favorites">{favoritesArray}</div>
      </div>
    );
  } else {
    return <div id="favor"></div>;
  }
};

export default StateBreweries;
