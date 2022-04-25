const db = require('./models');
apiController = {};

apiController.getAllPins = (req, res, next) => {
  const getPinsQuery = 'SELECT * FROM location';
  db.query(getPinsQuery)
    .then(result => {
        // console.log(result.rows);
        res.locals.allPins = result.rows;
        return next();
    })
    .catch(err => { 
        return next({
            log: `ERROR: apiController.getAllPins: ${err}`,
            message: 'Unable to load data for all locations. Check server logs'
        })
    })
}
// store query id into new variable 
// send back lat, long, clinic, id for each pin in locations table (array of objects)

// { "latitude": "50", "longitude": "39", "clinic": "codesmith", "newLocation": true }
apiController.createNewPin = (req, res, next) => {
    // req.body -> latitude, logitude, clinic, location_id
    const { latitude, longitude, clinic, location_id } = req.body; 
    // error handling for empty fields 
    // if (String(latitude).length === 0 || 
    //     String(latitude) === 0 || 
    //     clinic.length === 0 ||
    //     service_type.length === 0 || 
    //     cost.length === 0 ||
    //     review.length === 0
    // ) {
    //     return next({
    //         log: 'ERROR: apiController.createNewPin: Required field not found',
    //         message: 'Required field not found in request body'
    //     })
    // }

    if (location_id !== null) {
        // console.log(typeof location_id)
        // console.log(location_id)
        // console.log('location id is not null')
        return next();
    }

    const values = [String(latitude), String(longitude), clinic]; 
    const text = 'INSERT INTO location(latitude, longitude, clinic) VALUES($1, $2, $3)';

    db.query(text, values)
      .then(() => {
        return next();
      })
      .catch(err => { 
          return next({
              log: `ERROR: apiController.createNewPin: ${err}`,
              message: 'Unable to POST a new location. Check server logs'
          })
      })
}

apiController.getPin = (req, res, next) => {
    const { latitude, longitude } = req.body; 
    const values = [String(latitude), String(longitude)];
    const text = `SELECT * FROM location WHERE latitude=$1 AND longitude=$2`;
    // const getNewPinQuery = `SELECT * FROM location WHERE latitude=${lat} AND longitude=${long}`;
    db.query(text, values)
      .then(result => {
          // console.log(result.rows);
          res.locals.newPin = result.rows[0];
          // to get reviews: 
          res.locals.locationID = result.rows[0]._id;
          return next();
      })
      .catch(err => { 
          return next({
              log: `ERROR: apiController.getPin: ${err}`,
              message: 'Unable to load data for specified location. Check server logs'
          })
      })
}

apiController.getReviews = (req, res, next) => {
    const locationID = parseInt(req.params.id); 
    const getReviewsQuery = `SELECT * FROM reviews WHERE location_id=${locationID}`;
    db.query(getReviewsQuery)
      .then(result => {
        // console.log(result.rows);
        res.locals.reviews = result.rows;
        return next();
      })
      .catch(err => {
        return next({
            log: `ERROR: apiController.getReviews: ${err}`,
            message: 'Unable to load data for reviews. Check server logs'
        })
      })
}
// store query id into new variable 
// query database for location_id 
// find reviews associated with location_id
// send all reviews from specified location_id as an array to client 

apiController.addReview = (req, res, next) => { 
    const { service_type, cost, rating, review } = req.body;
    const locationID = res.locals.locationID; 

    const values = [service_type, cost, rating, review, locationID]; 
    const text = 'INSERT INTO reviews (service_type, cost, rating, review, location_id) VALUES($1, $2, $3, $4, $5)';
    
    db.query(text, values)
      .then(result => {
        return next();
      })
      .catch(err => {
        return next({
            log: `ERROR: apiController.addReview: ${err}`,
            message: 'Unable to add new review. Check server logs'
        })
      })
}
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


module.exports = apiController;