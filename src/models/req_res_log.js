const mongoose = require('mongoose');
const collections = require('../configuration/collection.config');
const Schema = mongoose.Schema;

const ReqResLogSchema = new Schema({
    request_url : {
        type    : String, 
        required: true
    },
    method : {
        type    : String,                                          
        required: true
    },
    request_IP : {
        type    : String, 
        required: true
    },
    request_header : {
        type    : Object, 
        required: true
    },
    request_body : {
        type : Object, 
    },
    response : {
        type    : Object, 
        required: true
    },
    status_code : {
        type    : Number, 
        required: true
    },
}, {
    timestamps : true
}); 

const logs=mongoose.model(collections.request_response_log,ReqResLogSchema);

module.exports=logs;