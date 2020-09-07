const mongoose = require('mongoose');
const collections = require('../configuration/collection.config');
const Schema = mongoose.Schema;


const userdetail = new Schema({
     userName:
    {
    type:String,
    unique:true
    },
    password:{
    type : String,    
    }
}, {
        timestamps: true
    });


const user = mongoose.model(collections.user_detail, userdetail);

module.exports = user;