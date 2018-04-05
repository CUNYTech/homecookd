var FoodItem = require("../../Models/foodItemSchema");
var Seller = require("../../Models/sellerSchema");

exports.updateFoodItem = (req, res) => {
    if(req.body.api_token == undefined || req.params.foodID == undefined){
      res.json({success: false, error: "Missing FoodId in Request Body"});
    }else{
    Seller.findOne({api_token: req.body.api_token}, function(err,Seller){
      if(err || !Seller){
        res.json({success: false, error: "Could not find the Seller Item with that ID"})
      }else{
        FoodItem.findById(req.params.foodID,function(err,foodItem){
          if(err){
            res.json({success: false, error: "Database Error When searching for Food Items"});
          }else if(foodItem.seller_id != Seller._id){
            console.log(foodItem.seller_id,"  ",Seller._id);
            res.json({success:false, error: "You do not have permission to edit this item"})
          }else{
            if(req.body.name !== undefined)foodItem.name = req.body.name;
            if(req.body.description !== undefined)foodItem.description = req.body.description;
            if(req.body.price !== undefined)FoodItem.price = req.body.price;
            foodItem.images = req.body.images; // needs to be taken care later
            foodItem.ingredients = req.body.ingredients;
            foodItem.allergens = req.body.allergens;
            foodItem.foodType = req.body.foodType;
            foodItem.save(function(err){
              if(err){
                res.json({success:false, error: "Could not Update Food Item"});
              }else{
                res.json({success:true, message: "Sucessfully Updated Food Items", data: foodItem});
              }
            })
          }
        })
      }
    });
  }
};
