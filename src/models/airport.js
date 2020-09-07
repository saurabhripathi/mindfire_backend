const mongoose = require('mongoose');
const collections = require('../configuration/collection.config');
const Schema = mongoose.Schema;


const airportDetails = new Schema({
    airportId: {
        type: Number,
        unique: true,
    },
    airportName:
    {
        type: String,
        unique: true
    },
    fuelCapacity: {
        type: Number,
    },
    fuelAvailable: {
        type: Number,
    }
}, {
    timestamps: true
});


const airport = mongoose.model(collections.airport, airportDetails);

module.exports = airport;