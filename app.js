// Define Dependences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect(
    'mongodb+srv://admin:'+ process.env.MONGO_ATLAS_PW +'@cluster0-scu6q.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
);

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<password>@cluster0-scu6q.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// Content
const app = express();

app.use(logger('dev'));

// import file route
const project = require('./app/routes/projects.route');

// Define router for file file route imported
app.use('/project', project);

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