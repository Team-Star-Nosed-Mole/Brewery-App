const axios = require('axios');
// const db = require('../postgres/db.js')

const brewController = {};

brewController.getBreweries = async (req, res, next) => {
  console.log('made it to the brewController.getBreweries');
  const userState = req.params.state;
  console.log(userState);

  if (userState.includes(' ')) {
    userState = userState.replace(' ', '_');
  }

  try {
    const options = {
      method: 'GET',
      url: `https://api.openbrewerydb.org/breweries?by_state=${userState}`,
      headers: {
        Accept: 'application/json',
      },
    };
    await axios(options).then((response) => {
      const breweries = response.data;
      res.locals.getBreweries = breweries;
    });
    return next();
  } catch (err) {
    throw new Error({
      log: 'error in the brewController getBrews method',
      message: { err: 'error in the brewController getBrews method' },
    });
  }
};

brewController.getVisited = async (req, res, next) => {
  ////// getFaves to Do ////////

  const queryString = 'SELECT * FROM usertable faves???? ';
  try {
    const visits = await db.query(queryString);
    res.locals.visited = visits;
    return next();
  } catch (err) {
    throw new Error({
      log: 'error in the brewController getVisited method',
      message: { err: 'error in the brewController getVisited method' },
    });
  }
};

brewController.deleteVisitedBrew = async (req, res, next) => {
  const deleteId = req.params.id;

  try {
    const queryString = 'Delete FROM yourTable WHERE _id like' + deleteId;
    //////////////////////////////////////////////////
    //DELETE FORM DB needs to be added
    // db.query()

    return next();
  } catch (err) {
    throw new Error({
      log: 'error in the brewController deleteVisitedBrews method',
      message: { err: 'error in the brewController deleteVisitedBrews method' },
    });
  }
};

brewController.addVisited = async (req, res, next) => {
  const addId = req.params.id;

  //// I AM NOT sure if this is how I would add new IDs to the res.locals object. I know that it would need to be an array
  /// WHEN IT COMES BACK FROM THE DB ///
  res.locals.visited = [{ ...res.locals.visited, addId }];

  try {
    const queryString = 'INSERT INTO yourTable VALUES ' + addId;
  } catch (err) {
    throw new Error({
      log: 'error in the brewController deleteVisitedBrews method',
      message: { err: 'error in the brewController deleteVisitedBrews method' },
    });
  }
};

module.exports = brewController;
