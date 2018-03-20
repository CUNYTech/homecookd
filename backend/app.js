// app.js
// Homecookd Main Server Code

// BASE SETUP
// ================================================
// Dependencies
try{
var express = require('express'); // Call express
var mongoose = require('mongoose'); // Interface for mongodb
var bodyParser = require('body-parser'); // Middle wear to parse Request Bodies
var hat = require('hat'); // Library for generating random ids
require('dotenv').config(); // Library to allow the importing of  enviromental variables in .env files
var cors = require('cors');
// Winston Logger
var logger = require('./Utils/logger.js');

}catch(error){
  console.error("ERROR are all the Dependencies installed?");
  console.log(error);
  process.exit(1);
}

// Config
var port = 3001;


// Mongodb Config
if(process.env.DB_URL != undefined){
  mongoose.connect(process.env.DB_URL); // Connect to database on Server
  logger.log("info","Connecting too " + process.env.DB_URL)
  var db = mongoose.connection;
  db.once('open', function() {
    // we're connected!
    logger.log("info", "Status Code " + mongoose.connection.readyState + " Connected");

  });

  // When the connection is disconnected
  db.on('disconnected', function () {
    logger.log("error", 'Mongoose default connection disconnected');
  });

  db.on('error', function(){
    logger.log("error", "ERROR Status Code " + mongoose.connection.readyState);
  });
}else{
  logger.log("error","You are missing the .env file");
  logger.log("error","Create a .env file and fill in the DB_URL param");
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  if(db == undefined){
    logger.log('error', "SIGNIT recieved Process Closing");
    process.exit(0);
  }else{
    db.close(function () {
      logger.log('error', 'Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  }
});


logger.log('info', "Server Starting");


var app = express(); // Define our app

app.use(cors());
// Configure app to use bodyParser()
// This will let us get data from a POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// ROUTES FOR API
// ===============================================
var apiRouter = require('./Routes/api');
var sudoApi = require('./Routes/sudoApi');
// REGISTER ROUTES --------------------------
// All api routes will be prefixed with /api
app.use('/api', apiRouter);
app.use('/sudoApi', sudoApi);

app.listen(port);

logger.log('info',"Server Started on PORT " + port);
