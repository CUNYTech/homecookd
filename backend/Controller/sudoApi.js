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
      User.find({api_token : req.body.api_token, admin:true},
      function(err,docs){
        if(!docs || err){
          res.status(401).json({error: "Couldnt find this api_token in Admins"})
        }else{
          // console.log("Admin Auth passed");
          next();
        }
      })

    }
}


exports.loginAdmin = (req, res) => {
    if (req.body.email === undefined || req.body.password === undefined){
        res.status(400).json( {error: "Missing email or password in request"} );
    }else{
      User.find({$or: [{email: req.body.email}, {username: req.body.email}]}
        ,
        function (err, docs){
            if(!docs.length || err){
                res.status(401).json( {error: "Could not find account"} );
            }else{

                bcrypt.compare(req.body.password, docs[0].password_hash, function(err, valid){
                    if (valid){
                        if(docs[0].admin){
                        res.status(201).json( {"api_token": docs[0].api_token} );
                      }else{
                        res.status(401).json({error: "You are not an ADMIN, You do not have permission"});
                      }
                    }else{
                        res.status(401).json( {error: "Invalid password"} );
                    }
                });
            }
        });
    }
}

exports.getUsers = (req,res) => {
  User.find({},'-password_hash',function(err,docs){
    if(!docs || err){
      res.status(401).json({error: "Couldn't find anything"});
    }else{
      res.status(200).json({response: docs});
    }
  })
}

exports.getSellers = (req,res) => {
  Seller.find({},'-password_hash', function(err,docs){
    if(!docs || err){
      res.status(401).json({error: "Couldn't find anything"});
    }else{
      res.status(200).json({response: docs});
    }
  })
}

exports.approveSeller = (req,res) => {
  Seller.findById(req.body.seller_id, function(err,doc){
    if(!doc || err){
      res.status(401).json({error: "Could Not find a User with that _id"});
    }else{
      doc.account_approved = true;
      doc.save(function(err){
        if(err){
          res.status(500).json({error: "Error while Saving"});
        }else{
          res.status(200).json({message: "Successfully Approved"});
        }
      })
    }
  })
}

exports.rejectSeller = (req,res) => {
  Seller.findById(req.body.seller_id, function(err,doc){
    if(!doc || err){
      res.status(401).json({error: "Could Not find a User with that _id"});
    }else{
      doc.account_approved = false;
      doc.save(function(err){
        if(err){
          res.status(500).json({error: "Error while Saving"});
        }else{
          res.status(200).json({message: "Successfully Rejected"});
        }
      })
    }
  })
}
