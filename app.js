const express= require ('express');
const router1 =require('./src/Routes/router1')
const router2 =require('./src/Routes/router2')
const airportRouter = require('./src/Routes/airport')
const aircraftRouter = require('./src/Routes/aircraft')
const transactionRouter = require('./src/Routes/transaction')
const cors = require('cors');
const bodyParser = require('body-parser');

require('./src/Jobs/notfication')
require('./src/db/mongoose');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api',router1,aircraftRouter,airportRouter,transactionRouter);

// app.use('/api',);

app.use('/api/master',router2);

module.exports=app

