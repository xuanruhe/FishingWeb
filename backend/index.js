const express =  require('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const signUpUrls = require ('./routes/signup');
const logInUrls = require ('./routes/login');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

const CONNECTION_URL = 'mongodb+srv://xuanru:xuanru123@cluster0.szmv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/', signUpUrls);
app.use('/', logInUrls);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));
 
mongoose.set('useFindAndModify', false);
 
