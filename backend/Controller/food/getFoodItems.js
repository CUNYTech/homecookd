var FoodItem = require("../../Models/foodItemSchema");
var Seller = require("../../Models/sellerSchema");


exports.getFoodItemByID = (req, res) => {
  if(req.params.FoodID == undefined ){
    res.json({success: false, error: "Missing FoodId in Request Body"});
  }else{
  FoodItem.findById(req.params.FoodID, function(err,foodItem){
    if(err || !foodItem){
      res.json({success: false, error: "Ccould not find the Food Item with that ID"})
    }else{
      res.json({success: true, message: "Sucessfully Found that item", data: foodItem})
    }
  });
}
};

exports.getFoodItemsBySellerID = (req, res) => {
  if(req.params.SellerID == undefined ){
    res.json({success: false, error: "Missing FoodId in Request Body"});
  }else{
  Seller.findById(req.params.SellerID, function(err,Seller){
    if(err || !Seller){
      res.json({success: false, error: "Could not find the Seller Item with that ID"})
    }else{
      FoodItem.find({"_id":{$in: Seller.food_items_id}},function(err,foodItems){
        if(err){
          res.json({success: false, error: "Database Error When searching for Food Items"});
        }else{
          res.json({success:true, message: "Sucessfully found Food Items", data: foodItems});
        }
      })
    }
  });
}
};

exports.getFoodItemsByAPItoken = (req, res) => {
  if(req.body.api_token == undefined ){
    res.json({success: false, error: "Missing api_token in Request Body"});
  }else{
  Seller.findOne({api_token: req.body.api_token}, function(err,Seller){
    if(err || !Seller){
      res.json({success: false, error: "Could not find the Seller Item with that ID"})
    }else{
      FoodItem.find({"_id":{$in: Seller.food_items_id}},function(err,foodItems){
        if(err){
          res.json({success: false, error: "Database Error When searching for Food Items"});
        }else{
          res.json({success:true, message: "Sucessfully found Food Items", data: foodItems});
        }
      })
    }
  });
}
};
