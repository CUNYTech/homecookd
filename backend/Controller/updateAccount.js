var User = require("../Models/userSchema");
var Seller = require("../Models/sellerSchema");
var bcrypt = require("bcryptjs");
var hat = require("hat");
const saltRounds = 10;
var rack = hat.rack(64, 16);
var passwordRegex = new RegExp("^(?=.{4,})");

// Another sample
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://admin:cunycodes@ds243798.mlab.com:43798/homecookd";

exports.updateSellerAccount = (req, res) => {
  if(req.body.api_token === undefined || req.body.api_token === "" ){ //add if password is not filled
      res.status(401).json( {error: "Missing api_token in request"} );
  }
  Seller.findOne( {api_token: req.body.api_token}, function(err, seller){
    console.log(req.body.api_token)
    console.log(seller)
    if (!seller  || err){
      res.status(401).json( {error: "Could not find seller with this api token"} );
    }else {
      // if(req.body.oldPassword != undefined && req.body.newPassword != undefined
      console.log("Comparing passwords");
      bcrypt.compare(req.body.oldPassword, seller.password_hash, function(err, valid){
        if (valid){
          res.status(201).json( {"api_token": seller.api_token, user_type: "Seller"} );
        }else{
          res.status(401).json( {error: "Invalid password"} );
        }
      });

      if(req.body.oldPassword === req.body.newPassword){
        res.status(400).json({error: "New password is the same as old one"} );
      }else if(!passwordRegex.test(req.body.password)){
        res.status(400);
        res.json( {error: "invalid password, has to contain at least one lower, one upper case character and has to be at least 6 digits"} );
      }else{
        updateSellerAccount(api_token, newPassword, res);
      }
    }
  }); // Seller.find
} // export

function updateSellerPassword({ seller_id}, newPassword, res)
{
  Seller.update({ _id: seller_id }, { $push: { newPassword: oldPassword } },
    function (err, numAffected, rawResponse) {
      if (err) {
        res.status(400).json("contact addMsg error: " + err);
      }else{
        bcrypt.hash(req.body.newPassword, saltRounds, function(err, hash){
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
    }
  );
}

// function updateUserPassword({ customer_id}, newPassword, res)
// {
//   User.update({ _id: user_id }, { $push: { newPassword: oldPassword } },
//     function (err, numAffected, rawResponse) {
//       if (err) {
//         res.status(400).json("contact addMsg error: " + err);
//       }else{
//         bcrypt.hash(req.body.newPassword, saltRounds, function(err, hash){
//           User.password_hash = hash;
//           User.save(function(err){
//             if (err){
//               console.log("Error while saving to database ");
//               res.status(500).send(err);
//             }
//             res.status(201);
//             res.json( {message: "Sucesfully changed password", user_type: "User" ,api_token: User.api_token} );
//           });
//         });
//       } //else close
//     }
//   );
// }
