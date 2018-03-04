var User = require("../Models/userSchema");
var Seller = require("../Models/sellerSchema");

var bcrypt = require("bcryptjs");

var hat = require("hat");

const saltRounds = 10; // how many times to salt the password

//
var rack = hat.rack(64, 16);


exports.checkAuth = (req, res, next) => {
    if (req.body.api_token === undefined) {
        res.status(400).json( {"error": "Missing api_token in request"} );
    }else{
        console.log("Auth passed");
        next();
    }
}

exports.getLoginUser = (req, res) => {
    res.json( {message: "/loginUser Route"} );
}


exports.loginUser = (req, res) => {
    console.log(req.body.email + " " + req.body.password);
    if (req.body.email === undefined || req.body.password === undefined){
        res.status(400).json( {error: "Missing email or password in request"} );
    }else{
      User.find({$or: [{email: req.body.email}, {username: req.body.email}]}
        ,
        function (err, docs){
            if(!docs.length || err){
                res.status(401).json( {error: "Could not find account"} );
            }else{
                console.log("Comparing passwords");
                console.log(docs);
                bcrypt.compare(req.body.password, docs[0].password_hash, function(err, valid){
                    if (valid){
                        res.status(201).json( {"api_token": docs[0].api_token} );
                    }else{
                        res.status(401).json( {error: "Invalid password"} );
                    }
                });
            }
        });
    }
}

exports.getLoginSeller = (req, res) => {
    res.json( {message: "/loginSeller Route"} );
}


exports.loginSeller = (req, res) => {
    console.log(req.body.email + " " + req.body.password);
    if (req.body.email === undefined || req.body.password === undefined){
        res.status(400).json( {error: "Missing email or password in request"} );
    }else{
        Seller.find({$or: [{email: req.body.email}, {username: req.body.email}]}
        ,
        function (err, docs){
            if(!docs.length || err){
                res.status(401).json( {error: "Could not fund account"} );
            }else{
                console.log("Comparing passwords");
                console.log(docs);
                bcrypt.compare(req.body.password, docs[0].password_hash, function(err, valid){
                    if (valid){
                        res.status(201).json( {"api_token": docs[0].api_token} );
                    }else{
                        res.status(401).json( {error: "Invalid password"} );
                    }
                });
            }
        });
    }
}


exports.registerUser = (req, res) => {
    if (req.body.email === undefined || req.body.email === '' ||
    req.body.password === undefined || req.body.password === '' ||
    req.body.name.first === undefined||  req.body.name.first === '' ||
    req.body.name.last === undefined || req.body.name.last === '' ||
    req.body.userName === undefined || req.body.userName === ''){
        res.status(400).json( {error: "Incomplete request"} );
        console.log("Incomplete request");
    }else{
        User.find( {$or: [{email: {$regex : new RegExp(req.body.email,"i")}},
        {userName: {$regex : new RegExp(req.body.userName,"i")}}]}
        ,
        function (err, docs){

            if(err){
              console.log("ERROR " + err);
            }
            if(!docs.length){
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
                                    res.status(500).send(err);
                                }
                              res.status(201);
                              res.json( {message: "Sucesfully registered", api_token: tempUser.api_token} );
                            });
                        });
                    }else{
                        res.status(400);
                        res.json( {error: "Username or Email belongs to another user"} );
                    }
                });

        }
}


    exports.registerSeller = (req, res) => {
        if (req.body.email === undefined || req.body.password === undefined || req.body.name.first === undefined|| req.body.name.last === undefined || req.body.userName === undefined){
            res.status(400).json( {error: "Incomplete request"} );
            console.log("Incomplete request");
        }else{
            Seller.find( {$or: [{email: {$regex : new RegExp(req.body.email,"i")}},
            {userName: {$regex : new RegExp(req.body.userName,"i")}}]}
            ,
            function (err, docs){

                if(err){
                  console.log("ERROR " + err);
                }
                if(!docs.length){
                            var tempSeller = new Seller();
                            tempSeller.name = req.body.name;
                            tempSeller.email = req.body.email;
                            tempSeller.userName = req.body.userName;
                            tempSeller.api_token = rack();
                            bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                                tempSeller.password_hash = hash;
                                tempSeller.save(function(err){
                                    if (err){
                                        console.log("Error while saving to database ");
                                        res.status(500).send(err);
                                    }
                                  res.status(201);
                                  res.json( {message: "Sucesfully registered", api_token: tempSeller.api_token} );
                                });
                            });
                        }else{
                            res.status(400);
                            res.json( {error: "Username or Email belongs to another user"} );
                        }
                    });

            }
        }
