var User = require("../Models/userSchema");
var Seller = require("../Models/sellerSchema");
var bcrypt = require("bcryptjs");
var hat = require("hat");
const saltRounds = 10;
var rack = hat.rack(64, 16);
var passwordRegex = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))");

// Another sample
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://admin:cunycodes@ds243798.mlab.com:43798/homecookd";

exports.updateSellerAccount = (req, res) => {
  if(req.body.seller_api_token === undefined || req.body.seller_api_token === "" ){
      res.status(400).json( {error: "Missing api_token in request"} );
      return;
  }
  Seller.find( {api_token: req.body.seller_api_token}, function(err, docs){
      if (!docs.length || err){
          res.status(401).json( {error: "Could not find seller with this api token"} );
      }else{
        if(req.body.oldPassword != /*oldPassword in database*/ ){
          res.status(400).json({error: "Old Password does not match"} );
          return;
        }if(req.body.oldPassword === req.body.newPassword){
          res.status(400).json({error: "Same password as old one"} );
          return;
        }else if(!passwordRegex.test(req.body.password)){
          res.status(400);
          res.json( {error: "invalid password, has to contain at least one lower, one upper case character and has to be at least 6 digits"} );
        }else{
          updateSellerAccount(req.body.seller_api_token, newPassword, res)
          // save new password to database replacing old one
        }
      }
  }); // Seller.find
} // export


function updateUserPassword({ customer_id}, newPassword, res},
  {
    User.update({ _id: user_id }, { $push: { newPassword: oldPassword } },
      function (err, numAffected, rawResponse) {
          if (err) {
              res.status(400).json("contact addMsg error: " + err);
          }else{
            bcrypt.hash(req.body.newPassword, saltRounds, function(err, hash){
                User.password_hash = hash;
                User.save(function(err){
                    if (err){
                        console.log("Error while saving to database ");
                        res.status(500).send(err);
                    }
                  res.status(201);
                  res.json( {message: "Sucesfully changed password", user_type: "User" ,api_token: User.api_token} );
                });
            });
          }
    );
  }

function updateSellerPassword({ seller_id}, newPassword, res},
{
  Seller.update({ _id: seller_id }, { $push: { newPassword: oldPassword } },
    function (err, numAffected, rawResponse) {
        if (err) {
            res.status(400).json("contact addMsg error: " + err);
        }else{bcrypt.hash(req.body.newPassword, saltRounds, function(err, hash){
            Seller.password_hash = hash;
            Seller.save(function(err){
                if (err){
                    console.log("Error while saving to database ");
                    res.status(500).send(err);
                }
              res.status(201);
              res.json( {message: "Sucesfully changed password", user_type: "Seller" ,api_token: Seller.api_token} );
            });
        });
      } //else close
  );
}

  function (err, docs){
    if(!docs.length || err){
        res.status(401).json( {error: "Could not fund account"} );
      }else{
        console.log("Comparing passwords");
        console.log(docs);
        bcrypt.compare(req.body.password, docs[0].password_hash, function(err, valid){
          if (valid){
              res.status(201).json( {api_token: docs[0].api_token, user_type: "Seller"} );
          }else{
              res.status(401).json( {error: "Invalid password"} );
          }
