const mongoose = require('mongoose');
const collections = require('../configuration/collection.config');
const Schema = mongoose.Schema;

const AutoIncrement = require('mongoose-sequence')(mongoose);

const transaction = new Schema({
    createdAt: { type : Date, default : Date.now },
    transactionId : {
        type : Number,
        unique : true,
    },
    transactionType : {
        type : String
    },
    airportId : {
        type : Number
    },
    airportName : {
        type : String
    },
    aircraftId : {
        type : Number
    },
    aircraftNo : {
        type : String
    },
    quantity : {
        type : Number
    }

})

transaction.plugin(AutoIncrement, {inc_field: 'transactionId'});
const transactionDetails = mongoose.model(collections.transaction,transaction)
module.exports = transactionDetails

