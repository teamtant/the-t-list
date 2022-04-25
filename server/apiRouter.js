const express = require('express');
const router = express.Router();

// IMPORT CONTROLLERS
const apiController = require('./apiController');

// GET ALL PINS / LOCATIONS
router.get('/', apiController.getAllPins, (req, res) => {
    res.status(200).json(res.locals.allPins);
});

// POST REQUEST FOR NEW PIN/LOCATION
// router.post('/', apiController.createNewPin, apiController.getPin, (req, res) => {
//     res.status(200).json(res.locals.newPin);
//     // res.sendStatus(200);
// });

// GET REQUEST FOR REVIEWS FOR ONE PIN/LOCATION
router.get('/:id', apiController.getReviews, (req, res) => {
    res.status(200).json(res.locals.reviews);
    // res.sendStatus(200);
});

// POST REQUEST FOR REVIEWS TO A PIN/LOCATION
router.post('/postReview', apiController.createNewPin, apiController.getPin, apiController.addReview, (req, res) => {
    res.sendStatus(200);
});


    // extract info from req.body and store into a new object using object deconstructing 
    // query the location database using location id
        // if (err) return next(err)
        // if location id doesn't exist, create a new location 
            // add new location info to location table 
            // add new review and link location_id to that review
            // store review & location info to res.locals to send back to client 
            // return next()
        // if exists, then add new review and link existing location_id to that review
            // store review info to res.locals to send back to client 
            // return next()

// EXPORT APIROUTER
module.exports = router; 