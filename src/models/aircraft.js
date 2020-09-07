const mongoose = require('mongoose');
const collections = require('../configuration/collection.config');
const Schema = mongoose.Schema;

const aircraftDetails = new Schema({
    aircraftId : {
        type : Number,
        unique : true
    },
    aircraftNo : {
        type : String,
        unique : true
    },
    airline : {
        type : String,
    },
    source : {
        type : String,
    },
    destination : {
        type : String
    }
},{
    timestamps: true
});

const aircraft = mongoose.model(collections.aircraft, aircraftDetails);

module.exports = aircraft;