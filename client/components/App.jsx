import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { createContext } from 'react';
import Login from './Login';
import Home from './Home';
//https://www.figma.com/file/2PRdto4pBE6alqIhw9eP4z/Brewery-App?node-id=0%3A1
//List component----breweries in state
//Already visited breweries
//Login
//Notes: Had to install react-router to setup front-side routing to different web page
//      1) All components nested within Router component have access to the router
//      2) All of our routes go inside the Switch component
//      3) Route path is the end point we want to go to and then inside it is the component want to show when they finish that route
//      4) Only what is inside the switch component is going to get re-rendered
//      5) Routes replaced Switch component in react-router-dom v6 https://www.youtube.com/watch?v=aZGzwEjZrXc

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
