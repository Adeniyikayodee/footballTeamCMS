//Importing modules here
const express = require('express'); // this helps create server
const bodyParser= require('body-parser'); // this enables http requests
const mongoose = require('mongoose'); // this helps woth db schema
require('dotenv').config(); // this enables me call environment varibales

mongoose.Promise = global.Promise;

// importing all the routes
const teamRouter = require('./routes/teamRoute');
const matchRouter = require('./routes/matchRoute');
const playerRouter = require('./routes/playerRoute');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//default port
const port = 3000;

// this will parse requests of content-type
app.use(bodyParser.urlencoded({ extended: true }));

// this will parse requests of content-type - application/json
app.use(bodyParser.json())

// Adds all routes to middleware 
app.use('/teamRoute', teamRouter);
app.use('/playerRoute', playerRouter);
//app.use('/matchRoute', matchRouter);


// Connecting to the database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//set port
app.listen(port, () => {
    console.log(`Server is listenung on port ${port}...`)
});

