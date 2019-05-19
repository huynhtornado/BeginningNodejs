// Define Dependences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');

// Connect to DB
mongoose.connect(
    'mongodb+srv://admin:'+ process.env.MONGO_ATLAS_PW +'@cluster0-scu6q.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log('MongoDB connection succeeded!');
        } else {
            console.log('Error in DB connection : ' + err);
        }
    }
);

// import file route
const employee = require('./app/controllers/employees.controller');

// Content
const app = express();

app.use(logger('dev'));

/** Set up bodyparser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views'));
app.engine('ejs', exphbs({ extname: 'ejs', defaultLayout: 'index', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'ejs');

// Define router, import file route(controller)
app.use('/employee', employee);

// Module exports
module.exports = app;