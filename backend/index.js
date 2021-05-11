// const express =  require('express');
// const mongoose = require ('mongoose');
// const cors = require ('cors');
// const signUpUrl = require ('./routes/signup');
// const logInUrl = require ('./routes/login');
// const postsUrl = require('./routes/posts');
// const session = require('express-session');
// const passport = require("passport");

// const app = express();

// const CONNECTION_URL = 'mongodb+srv://xuanru:xuanru123@cluster0.szmv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.json({limit: "30mb", extended: true}));
// app.use(express.urlencoded({limit: "30mb", extended: true}));
// app.use(cors());
// app.use('/', signUpUrl);
// app.use('/', logInUrl);
// app.use('/', postsUrl);

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }));

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
//     .catch((error) => console.log(error.message));
 
// mongoose.set('useFindAndModify', false);



const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require ('cors');

const CONNECTION_URL = 'mongodb+srv://xuanru:xuanru123@cluster0.szmv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

const loginUrl = require('./routes/login');
const signupUrl = require('./routes/signup');
const postsUrl = require('./routes/posts');
const fishUrl = require('./routes/fish');

const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/', loginUrl);
app.use('/', signupUrl);
app.use('/', postsUrl);
app.use('/', fishUrl);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(5000, () => {
  console.log('Server started.')
});
 
