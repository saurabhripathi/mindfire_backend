const helper = require('../helper/helper')
const airportDetails = require('../models/airport')



const getAirportsList = async (req, res) => {
    try {
        const data = await airportDetails.find({});
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({ error: 'server error' })
    }
}

const initializeAirport = async (req, res) => {
 
    try {
        console.log(req.body)
        const data = new airportDetails(req.body)
        const doc = await data.save()
        res.status(200).send({message: "success"})
    }
    catch (e) {
        console.log(e)
        res.status(500).send({ error: 'server error' })
    }
}

module.exports = {
    getAirportsList,initializeAirport
}