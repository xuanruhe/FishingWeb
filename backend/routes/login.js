const express = require ('express');
const passport = require("passport");

const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels')



router.post("/login", function(req, res){

    const signedUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName, 
        username:req.body.username,
        email:req.body.email,
        password: req.body.password,
    });
  
    req.login(signedUpUser, function(err){
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function(){
          console.log("signedin");
          res.redirect("/forum");
        });
      }
    });
  
  });

  module.exports = router;
  
  