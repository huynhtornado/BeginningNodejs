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

// Content
const app = express();

app.use(logger('dev'));

// import file route
const employee = require('./app/routes/employees.route');

// Define router for file file route imported
app.use('/employee', employee);

/** Set up bodyparser */
app.set(bodyParser.urlencoded({ extended: false }));
app.set(bodyParser.json());
app.set('views', path.join(__dirname, '/views'));
app.engine('ejs', exphbs({ extname: 'ejs', defaultLayout: 'index', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'ejs');


// Module exports
module.exports = app;