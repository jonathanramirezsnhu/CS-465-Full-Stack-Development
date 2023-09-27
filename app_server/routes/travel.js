const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');

/*GET home page. */
router.get('/', controller.travel);
module.exports = router;
/*
Note: Reading a JSON file every time a request is processed by the web server is not
best practice. This is a quick and dirty technique during development to aid in rapid 
prototyping.
*/
//Read trips data from JSON file and pass to Handlebars 
var fs = require('fs')
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/*GET travel view*/
const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Gataways', trips});    //Pass the trips data to Handlebars
};

module.exports = {
    travel
};
