express = require('express');

const brewController = require('../controllers/brewController');

const router = express.Router();

router.get(
  '/:state',
  brewController.getVisited,
  brewController.getBreweries,
  (req, res) => {
    console.log('made it back from controller to apiBrewRouter GET middleware');
    console.log(res.locals.getBreweries);
    return res.status(200).json(res.locals.getBreweries, res.locals.visited);
  }
);

///////////////////////////////////////////////////////////////////////////
// Not sure if this is how to do the second get to ONLY getVisted //
router.get('/:state/visited', brewController.getVisited, (req, res) => {
  console.log('made it back from controller to apiBrewRouter GET middleware');
  console.log(res.locals.getBreweries);
  return res.status(200).json(res.locals.visited);
});

///////////////////////////////////////////////////////////////////////////
// Would this also need to get Updated visited once it's been deleted
router.delete('/:state/:id', brewController.deleteVisitedBrew, (req, res) => {
  console.log(
    'made it back from controller to the apiBrewRouter DELETE middleware'
  );
});

router.post('/:state/:id', brewController.addVisited, (req, res) => {
  console.log(
    'made it back from controller to the apiBrewRouter POST middleware'
  );
  return res.status(200).json(res.locals.visited);
});

module.exports = router;
