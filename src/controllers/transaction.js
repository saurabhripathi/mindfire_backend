const helper = require('../helper/helper')
const transaction = require('../models/transaction')
const airport = require('../models/airport')
const aircraft = require('../models/aircraft')
const collections = require('../configuration/collection.config');


const saveTransaction = async (req, res) => {
    try {
        if (req.body.transactionType === "IN") {
            const airportId = req.body.airportId
            const k = await airport.updateOne({ airportId: airportId }, { $inc: { fuelAvailable: req.body.quantity } })
            try {
                const airportDoc = await airport.findOne({ airportId: airportId })
                req.body['airportName'] = airportDoc.airportName
                const data = new transaction(req.body)
                const transactionData = await data.save()
                res.status(200).send(transactionData);
            }
            catch (e) {
                res.status(500).send({ message: "Internal Server Error" });
            }
        }
        else if (req.body.transactionType === "OUT") {
            const airportId = req.body.airportId
            const isUpdated = await airport.updateOne({ $and: [{ airportId: { $eq: airportId } }, { fuelAvailable: { $gt: req.body.quantity } }] }, { $inc: { fuelAvailable: -req.body.quantity } })
            const airportDoc = await airport.findOne({ airportId: airportId })
            const aircraftDoc = await aircraft.findOne({ aircraftId: req.body.aircraftId })
            req.body['airportName'] = airportDoc.airportName
            req.body['aircraftNo'] = aircraftDoc.aircraftNo
            const data = new transaction(req.body)
            const transactionData = await data.save()
            res.status(200).send(transactionData);
        }

    } catch (e) {
        res.status(400).send({ message: "Bad Request" });
    }
}


const getFuelReport = async (req, res) => {
    
    try {
        // const airport=collections.airport
        const transaction=collections.transaction
        const transactionList = await airport.aggregate([{$lookup:{
            from : "transactions",
            foreignField : "airportId",
            localField : "airportId",
            as : "transactions"
        }}])
        res.status(200).send({ data: transactionList })
    } catch (e) {
        console.log(e)
    }
}


const getTransactions = async (req, res) => {
    try {
        const transactionList = await transaction.find({})
        res.status(200).send({ data: transactionList })
    } catch (e) {
    }
}

module.exports = {
    saveTransaction, getTransactions, getFuelReport
}