const db = require('./models');
apiController = {};

apiController.getAllPins = (req, res, next) => {
  const getPinsQuery = 'SELECT * FROM location';
  db.query(getPinsQuery)
    .then(result => {
        console.log(result.rows);
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

// { "latitude": "50", "longitude": "39", "clinic": "codesmith" }
apiController.createNewPin = (req, res, next) => {
    // req.body -> latitude, logitude, clinic
    const { latitude, longitude, clinic } = req.body; 
    const str_lat = String(latitude);
    const str_long = String(longitude);
    if (str_lat.length === 0 || str_long.length === 0 || clinic.length === 0) {
        return next({
            log: 'ERROR: apiController.createNewPin: Required field not found',
            message: 'Required field not found in request body'
        })
    }
    res.locals.latitude = str_lat; 
    res.locals.longitude = str_long; 
    const values = [str_lat, str_long, clinic]; 
    const text = 'INSERT INTO location(latitude, longitude, clinic) VALUES($1, $2, $3)';

    db.query(text, values)
      .then(result => {
        return next();
      })
      .catch(err => { 
          return next({
              log: `ERROR: apiController.createNewPin: ${err}`,
              message: 'Unable to POST a new location. Check server logs'
          })
      })
}

apiController.getNewPin = (req, res, next) => {
    const lat = res.locals.latitude; 
    const long = res.locals.longitude; 
    const values = [lat, long];
    const text = `SELECT * FROM location WHERE latitude=$1 AND longitude=$2`;
    // const getNewPinQuery = `SELECT * FROM location WHERE latitude=${lat} AND longitude=${long}`;
    db.query(text, values)
      .then(result => {
          console.log(result.rows);
          res.locals.newPin = result.rows[0];
          return next();
      })
      .catch(err => { 
          return next({
              log: `ERROR: apiController.getNewPin: ${err}`,
              message: 'Unable to load data for specified location. Check server logs'
          })
      })
}

apiController.getReviews = (req, res, next) => {

}
// store query id into new variable 
// query database for location_id 
// find reviews associated with location_id
// send all reviews from specified location_id as an array to client 

apiController.addReview = (req, res, next) => { 

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