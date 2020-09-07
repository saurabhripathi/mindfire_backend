const express = require('express');
const aircraftcontroller = require('../controllers/aircraft')
const router = express.Router();
router.get('/v1/aircraft-list', aircraftcontroller.getAircraftssList);
router.post('/v1/aircraft-list', aircraftcontroller.initializeAircraft);
module.exports = router;