/* eslint-disable no-undef */

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// HANDLE PARSING REQUEST BODY

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use('/build', express.static(path.join(__dirname, '../build')));
    app.get('/', (req, res) => {
        return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
}

/* Invalid End Point Error Handler */
app.use((req, res) => res.status(404).send('This page does not exist!'));

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});