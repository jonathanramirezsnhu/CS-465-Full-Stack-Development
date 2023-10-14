var express = require('express');
var router = express.Router();
//const ctrlMain = require('../controllers/main');
const tripsController = require('../controllers/trips');

/* GET home page. */
//router.get('/', ctrlMain.index);
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindCode);
    
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsList)
    //.put(auth, tripsController.tripsUpdateTrip);

module.exports = router;