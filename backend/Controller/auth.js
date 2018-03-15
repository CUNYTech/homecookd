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

// use checkAuth as a midware
exports.userInfo = (req, res) => {
    User.find({api_token: req.body.api_token}, function(err, docs){
        if (!docs.length || err){
            res.status(401).json( {error: "Could not find user with this api token"} );
        }else{
            res.status(200);
            res.json({
                "userName": docs[0].userName,
                "email": docs[0].email,
                "name": docs[0].name,
                "createDate": docs[0].createDate,
                "orders": docs[0].orders,
                "reviews": docs[0].reviews,
                "location": docs[0].location,
            });
        }
    });
}

// use checkAuth as a midware
exports.sellerInfo = (req, res) =>{
    Seller.find( {api_token: req.body.api_token}, function(err, docs){
        if (!docs.length || err){
            res.status(401).json( {error: "Could not find seller with this api token"} );
        }else{
            res.status(200);
            res.json({
                "userName": docs[0].userName,
                "email": docs[0].email,
                "name": docs[0].name,
                "createDate": docs[0].createDate,
                "profile_img": docs[0].profile_img,
                "business_name": docs[0].business_name,
                "business_type": docs[0].business_type,
                "account_approved": docs[0].account_approved,
                "reviews": docs[0].reviews,
                "food_items_ids": docs[0].food_items_id,
                "location": docs[0].location,
            });
        }
    });
} 


exports.getLoginUser = (req, res) => {
    res.json( {message: "/loginUser Route"} );
}


exports.loginUser = (req, res) => {
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
                        res.status(201).json( {"api_token": docs[0].api_token, user_type: "Customer"} );
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
    if (req.body.email === undefined || req.body.password === undefined){
        res.status(400).json( {error: "Missing email or password in request"} );
    }else{
        Seller.find({$or: [{email: req.body.email}, {username: req.body.email}]}
        ,
        function (err, docs){
            if(!docs.length || err){
                res.status(401).json( {error: "Could not find account"} );
            }else if(docs[0].account_approved){
                console.log("Comparing passwords");
                console.log(docs);
                bcrypt.compare(req.body.password, docs[0].password_hash, function(err, valid){
                    if (valid){
                        res.status(201).json( {api_token: docs[0].api_token, user_type: "Seller"} );
                    }else{
                        res.status(401).json( {error: "Invalid password"} );
                    }
                });
            }else{
                res.status(401).json( {error: "Pending approval"} );
            }
        });
    }
}


// Regex validations
var emailRegex = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$");
var userNameRegex = new RegExp("^[a-zA-Z0-9\.\-\_]{3,15}$");
var passwordRegex = new RegExp("^(?=.{4,})");


exports.validateRegistration = (req, res, next) => {
    if (req.body.name.first === undefined|| req.body.name.first === '' || req.body.name.first === ' ' ||
    req.body.name.last === undefined || req.body.name.last === ''  || req.body.name.last === ' '){
        res.status(400).json( {error: "Incomplete request, name is missing!"} );
        console.log("Incomplete request");
    }else if (!emailRegex.test(req.body.email)) {
        res.status(400);
        res.json( {error: "invalid Email address"} );
    }else if (!userNameRegex.test(req.body.userName)){
        res.status(400);
        res.json( {error: "invalid Username, has to be between 3 to 15 digits"} );
    }else if(!passwordRegex.test(req.body.password)){
        res.status(400);
        res.json( {error: "invalid password, has to contain at least 4 digits"} );
    }else{
        console.log("Validation passed");
        next();
    }
}

exports.registerUser = (req, res) => {
    User.find( {$or: [{email: {$regex : new RegExp(req.body.email,"i")}},
    {userName: {$regex : new RegExp(req.body.userName,"i")}}]}
    ,
    function (err, docs){

        if(err){
            console.log("ERROR " + err);
            res.status(500).json( {error: "Could not save it to database" } );
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
                            res.json( {message: "Sucesfully registered", user_type: "Customer" ,api_token: tempUser.api_token} );
                        });
                    });
                }else{
                    res.status(400);
                    res.json( {error: "Username or Email belongs to another user"} );
                }
            }
        );
}

exports.registerSeller = (req, res) => {
    Seller.find( {$or: [{email: {$regex : new RegExp(req.body.email,"i")}},
    {userName: {$regex : new RegExp(req.body.userName,"i")}}]}
    ,
    function (err, docs){

        if(err){
            console.log("ERROR " + err);
            res.status(500).json( {error: "Could not save it to database" } );
        }
        if(!docs.length){
                    var tempSeller = new Seller();
                    tempSeller.name = req.body.name;
                    tempSeller.email = req.body.email;
                    tempSeller.userName = req.body.userName;
                    tempSeller.business_name = req.body.business_name;
                    tempSeller.profile_img = "undefined"; // update - give them a random image
                    tempSeller.account_approved = false;
                    tempSeller.api_token = rack();
                    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                        tempSeller.password_hash = hash;
                        tempSeller.save(function(err){
                            if (err){
                                console.log("Error while saving to database ");
                                res.status(500).send(err);
                            }
                            res.status(201);
                            res.json( {message: "Sucesfully registered, ", user_type: "Seller" ,api_token: tempSeller.api_token} );
                        });
                    });
                }else{
                    res.status(400);
                    res.json( {error: "Username or Email belongs to another user"} );
                }
        }
    );
}
