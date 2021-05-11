const express = require ('express');

const router = express.Router();
const fishTemplate = require('../models/fishModel')


router.get("/fish", 
    (req, res) => {
        fishTemplate.find({},function(err, allFishes) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(allFishes);
            }
    });
}) 

module.exports = router