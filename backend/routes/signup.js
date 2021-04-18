const express = require ('express');
const passport = require("passport");

const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels')

// router.post('/signup', (request, response) => {
//     const signedUpUser = new signUpTemplateCopy({
//         fullName:request.body.fullName,
//         username:request.body.username,
//         email:request.body.email,
//         password:request.body.password
//     })
//     signedUpUser.save()
//     .then(data=>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })
// } )

router.post('/signup', (request, response) => {
    
    signUpTemplateCopy.register({
        fullName:request.body.fullName, 
        username:request.body.username,
        email:request.body.email
    }, 
        request.body.password, (err, user) => {
            if(err){
                console.log(err);
                // response.redirect('/signup');
            } else {
                passport.authenticate("local")(request, response, () => {
                    response.redirect('/forum');
                    //console.log(response);
                })
            }
        })
})

router.get("/forum", (req, res) => {

    if (req.isAuthenticated()) {
        res.render('forum');
    } else {

        res.redirect('/login');
    }
})

module.exports = router