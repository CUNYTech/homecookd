var User = require("../Models/userSchema");

var bcrypt = require("bcryptjs");

var hat = require("hat");

const saltRounds = 10; // how many times to salt the password

// 
var rack = hat.rack(64, 16);

exports.registerUser = (req, res) => {
    if (req.body.email === undefined || req.body.password === undefined || req.body.name === undefined || req.body.userName === undefined){
        res.status(400).json( {error: "Incomplete request"} );
        console.log("Incomplete request");
    }else{
        User.find( {email: {$regex : new RegExp("^" + req.body.email + "$" + "i")}},function (err, docs){
            if(!docs.length){
                User.find( {userName: {$regex : new RegExp("^" + req.body.userName + "$" + "i")}}, function(err, docs){
                    if (!docs.length){
                        var tempUser = new User();
                        tempUser.name = req.body.name;
                        tempUser.email = req.body.email;
                        tempUser.userName = req.body.userName;
                        tempUser.api_token = rack();
                        bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                            tempUser.password_hash = hash;
                            tempUser.save(function(err){
                                if (err){
                                    console.log("Error while saving to database ");
                                    res.send(err);
                                }

                                res.status(201);
                                res.json( {message: "Sucesfully registered", api_token: tempUser.api_token} );
                            });
                        });
                    }else{
                        res.status(400);
                        res.json( {message: "Username belongs to another user"} );
                    }
                }); 
            }else{
                res.status(400);
                res.json( {message: "Email belongs to antoher user"} );
            }
        });
    }
}