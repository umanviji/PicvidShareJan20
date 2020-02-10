//const express = require('express');
const mongoose = require('mongoose');
//const router = express();

//Db config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose
    .connect(db)
    .then(() => console.log('MongoDb connected!'))
    .catch(err => console.log(err));

