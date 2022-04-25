import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StateBreweries from './StateBreweries';
import VisitedBreweries from './VisitedBreweries';

const UserLanding = () => {
  const [visBreweries, setVisBreweries] = useState();

  // useEffect(() => {
  //   //query user's state and visited breweries to can pass down to components below
  // }, []);

  return (
    <div className="userlanding">
      <StateBreweries />
      <VisitedBreweries />
    </div>
  );
};

export default UserLanding;
