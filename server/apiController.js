apiController = {};

apiController.getAllPins = () => {

}
// store query id into new variable 
// send back lat, long, clinic, id for each pin in locations table (array of objects)

apiController.getReviews
// store query id into new variable 
// query database for location_id 
// find reviews associated with location_id
// send all reviews from specified location_id as an array to client 

apiController.addReview
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


res.status(200).json(res.locals.newReviews);