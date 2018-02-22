var Customer = require("../Models/customerSchema");

var bcrypt = require("bcryptjs");

var hat = require("hat");

const saltRounds = 10; // how many times to salt the password

// 
var rack = hat.rack(64, 16);

exports.registerUser = (req, res) => {
    if (req.body.email === undefined ){
        console.log("No email provided");
        res.json({message: "No email"});
    }
}