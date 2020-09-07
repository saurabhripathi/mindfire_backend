const express = require('express');
const airportcontroller = require('../controllers/airport')
const router = express.Router();
router.post('/v1/airport-list', airportcontroller.initializeAirport);
router.get('/v1/airport-list', airportcontroller.getAirportsList);


module.exports = router;    