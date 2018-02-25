var Customer = require("../Models/customerSchema");
var Seller = require("../Models/sellerSchema");

var bcrypt = require("bcryptjs");

var hat = require("hat");

const saltRounds = 10; // how many times to salt the password

// 
var rack = hat.rack(64, 16);


exports.registerSeller = (req, res) => {
    if(req.body.email === undefined || req.body.password === undefined || req.body.name === undefined){
        res.status(400);
        res.json( {err: "Incomplete request"} );
        console.log("Incomplete request");
    }else{
        Seller.find( {email : {$regex: new RegExp("^" + req.body.email + "$", "i")}}, function (err, docs){
            if (!docs.length){
                var tempSeller = new Seller();
                tempSeller.email = req.body.email;
                tempSeller.api_token = rack();
                tempSeller.name = req.body.name;
                tempSeller.account_approved = false;
                bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                    tempSeller.password_hash = hash;
                    tempSeller.save(function(err){
                        if (err){
                            console.log("Error while saving ");
                            res.send(err);
                        }

                        res.status(201);
                        res.json( {message: "Succesfully registered", api_token: tempSeller.api_token} );
                    });
                });
            }else{
                res.status(400);
                res,json( {error: "Email belongs to another user"} );
            }
        });
    }
}


// this should be changed to registerCustomer
exports.registerUser = (req, res) => {
    if (req.body.email === undefined || req.body.password === undefined || req.body.name === undefined || req.body.userName === undefined){
        res.status(400);
        res.json({error: "Incomplete request"});
        console.log("Incomplete request");
    }else{
        Customer.find({email : {$regex : new RegExp("^" + req.body.email + "$", "i")}}, function (err, docs){
            if(!docs.length){
                Customer.find({userName : {$regex : new RegExp("^" + req.body.userName + "$", "i")}}, function (err, docs){
                    if(!docs.length){
                        var tempCustomer = new Customer();
                        tempCustomer.email = req.body.email;
                        tempCustomer.api_token = rack();
                        tempCustomer.name = req.body.name;
                        tempCustomer.userName = req.body.userName;
                        bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                            tempCustomer.password_hash = hash;
                            tempCustomer.save(function(err){
                                if(err){
                                    console.log("Error while saving ");
                                    res.send(err);
                                }

                                res.status(201);
                                res.json( {message: "Succesfully registered", api_token: tempCustomer.api_token} );
                            });
                        });
                    }
                    else {
                        res.status(400);
                        res.json( {error: "Username belongs to another user"} );
                    }
                });
            }else{

                res.status(400);
                res,json( {error: "Email belongs to another user"} );
            }
        });
    }
}