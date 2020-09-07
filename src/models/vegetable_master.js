const mongoose = require('mongoose');
const collections = require('../configuration/collection.config');
const Schema = mongoose.Schema;

const vegetable = new Schema({
    id: {
        type: String,
        required: true,
        unique:true
    },
    name:
    {
        type: String,
        unique:true
    },
    hindi_name:{
        type: String,
        required:true
    },
    is_green:{
        type:Boolean,
        required:true
    },
    is_available:{
        type:Boolean,
        default:false
    },
    searching_name:
    {
      type:String
      
    },
    category:
    {
    type:Object
    },
    one_liner:
    {
    type:String,
     required:true
    },
    description:
    {
    type:String,
    required:true
    },
    pics:[{
    pic:{
     type: Buffer
    }}],
    variants:[
        {
            varient:{
                
                unit_type:{
                    type:String
                },
                quantity:{
                    type:String
                },
                mrp:{
                    type:String
                },
                is_available:{
                    type:Boolean,
                    default:false
                },
                preselected:{
                    type:Boolean,
                    default:false
                }
            }
        }
    ]

   
}, {
        timestamps: true
    });


const vegetables = mongoose.model(collections.vegetable_master, vegetable);

module.exports = vegetables;