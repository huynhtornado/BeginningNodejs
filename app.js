// Define Dependences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Content
const app = express();

app.use(logger('dev'));

/** Set up bodyparser */
app.set(bodyParser.urlencoded({ extended: false }));
app.set(bodyParser.json());

app.use('/', (req, res) => {
    res.status(200).json({
        message: 'URL is correct!'
    });
});

app.use((req, res, next) => {
    // res.status(404).json({
    //     message: 'URL not found!'
    // });
    // next(res);
});


// Module exports
module.exports = app;