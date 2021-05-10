const mongoose = require('mongoose');

const postTemplate = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
})

const postTable = new mongoose.model('postTable', postTemplate);

module.exports = postTable;



