// Define Dependences
const express = require('express');
const bodyParser = require('body-parser');

// Content
const app = express();

/** Set up bodyparser */
app.set(bodyParser.urlencoded({ extended: false }));
app.set(bodyParser.json());


// Module exports
module.exports = app;