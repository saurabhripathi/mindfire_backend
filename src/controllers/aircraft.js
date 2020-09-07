const helper = require('../helper/helper')
const aircraftDetails = require('../models/aircraft')



const getAircraftssList = async (req, res) => {
    try {
        const data = await aircraftDetails.find({});
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({ error: 'server error' })
    }

}


const initializeAircraft = async (req, res) => {
 
    try {
        console.log(req.body)
        const data = new aircraftDetails(req.body)
        const doc = await data.save()
        res.status(200).send({message: "success"})
    }
    catch (e) {
        console.log(e)
        res.status(500).send({ error: 'server error' })
    }
}

module.exports = {
    getAircraftssList,initializeAircraft
}