const express = require('express'); // this helps create server
const bodyParser= require('body-parser'); // this enables http requests
const mongoose = require('mongoose'); // this helps woth db schema
require('dotenv').config(); // this enables me call environment varibales

mongoose.Promise = global.Promise;

// importing routes
const indexRoutes = require('./routes/routes');

const app = express();
const port = 3000; //setting dafault port here

// connects to the database and attach a db object to the request object
app.use(expressMongoDB(process.env.DB_URL));


// this will parse requests of content-type
app.use(bodyParser.urlencoded({ extended: true }));

// this will parse requests of content-type - application/json
app.use(bodyParser.json())


// APP.USE HERE 


// Connecting to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

