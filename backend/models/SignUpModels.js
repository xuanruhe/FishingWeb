const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        // required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

signUpTemplate.plugin(passportLocalMongoose);


const signUpTable = new mongoose.model('signUpTable', signUpTemplate);

passport.use(signUpTable.createStrategy());
passport.serializeUser(signUpTable.serializeUser());
passport.deserializeUser(signUpTable.deserializeUser());


module.exports = signUpTable;



