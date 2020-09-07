const helper = require('../helper/helper')
const userdetail1 = require('../models/userdetails')



const login = async (req, res) => {
    try {
        // const data = await userdetail1.findOne({ userName: req.body.userName, password: req.body.password });
        if (req.body.userName === 'test@gmail.com' && req.body.password === 'demo') {
            res.status(200).send({ "message": "success","token" : "123ertt" });
        }
        else{
            res.status(404).send({ error: 'invalid user' })
        }
        
    }
    catch (e) {
        res.status(500).send({ error: 'server error' })
    }
}

module.exports = {
    login
}