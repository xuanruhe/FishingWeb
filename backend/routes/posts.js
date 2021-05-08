const express = require ('express');
const passport = require('passport');

const router = express.Router();
const postTemplate = require('../models/postModel')

// Plug in the JWT strategy as a middleware so only verified users can access this route.
router.post('/posts', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req.body);
        var newPost = {
            title: req.body.title,
            content: req.body.content
        }

        postTemplate.create(newPost, function(err, newlyCreated) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(newlyCreated);
            }
        })
        //res.json("Succeed!");
    }
);


router.get("/posts", 
    (req, res) => {
        postTemplate.find({},function(err, allPosts) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(allPosts);
            }
    });
}) 

module.exports = router