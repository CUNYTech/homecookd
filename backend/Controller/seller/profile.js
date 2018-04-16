
/*jshint esversion: 6 */


var FoodItem = require("../../Models/foodItemSchema");
var Seller = require("../../Models/sellerSchema");

exports.updateFoodItem = (req, res) => {
    if(req.body.api_token == undefined || req.params.foodID == undefined){
      res.json({success: false, error: "Missing FoodId in Request Body"});
    }else{
    Seller.findOne({api_token: req.body.api_token}, function(err,Seller){
      if(err || !Seller){

        res.json({success: false, error: "Could not find the Seller Item with that ID"});

      }else{
        FoodItem.findById(req.params.foodID,function(err,foodItem){
          if(err){
            res.json({success: false, error: "Database Error When searching for Food Items"});
          }else if(foodItem.seller_id != Seller._id){

            res.json({success:false, error: "You do not have permission to edit this item"});
          }else{
            if(req.body.name !== undefined)foodItem.name = req.body.name;
            if(req.body.description !== undefined)foodItem.description = req.body.description;
            if(req.body.price !== undefined)foodItem.price = req.body.price;
            if(req.body.image !== undefined)foodItem.image = req.body.image; // needs to be taken care later


            foodItem.ingredients = req.body.ingredients;
            foodItem.allergens = req.body.allergens;
            foodItem.foodType = req.body.foodType;
            foodItem.save(function(err){
              if(err){

                res.status(500).json({success:false, error: "Could not Update Food Item"});
              }else{
                console.log("Updated Successfully");
                res.json({success:true, message: "Sucessfully Updated Food Items", data: foodItem});
              }
            });
          }
        });

      }
    });
  }
};

exports.sellerInfoBySellerID = (req,res) => {
  if(req.params.sellerID == undefined){

    res.json({success: false, error: "Missing StoreID in Request Body"});
  }else{
    Seller.findById(req.params.sellerID,'-password_hash -email -api_token',function(err,Seller){
      if(err || !Seller){
        res.json({success:false,error: "Database Error or Could Not find Seller"});
      }else{
        res.json({success: true, data : Seller});
      }
    });
  }
};

