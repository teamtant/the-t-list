// IMPORT CONTROLLERS
const apiController = require('./apiController');

// GET ALL PINS / LOCATIONS
app.get('/', apiController.getAllPins, (req, res) => {
    res.status(200).json(res.locals.allPins);
});

// GET REQUEST FOR ONE PIN/LOCATION
app.get('/?id', apiController.getReviews, (req, res) => {
    res.status(200).json(res.locals.reviews);
});

// POST REQUEST TO A PIN/LOCATION
app.post('/', apiController.addReview, (req, res) => {
    res.status(200).json(res.locals.newReview);
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
module.exports = apiRouter; 