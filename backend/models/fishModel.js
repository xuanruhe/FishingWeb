const mongoose = require('mongoose');

const fishTemplate = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    'scientific name':{
        type:String,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    description: { 
        type: Array, 
    },
    location: { 
        type: Array, 
    },
    technique: { 
        type: Array, 
    },
})

const fishTable = new mongoose.model('fishtables', fishTemplate);

module.exports = fishTable;



