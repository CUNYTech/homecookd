exports.updateFoodItem = (req, res) => {
  if(req.body.api_token == undefined || req.params.foodID){
    res.json({success: false, error: "Missing FoodId in Request Body"});
  }else{
  Seller.findOne({api_token: req.body.api_token}, function(err,Seller){
    if(err || !Seller){
      res.json({success: false, error: "Could not find the Seller Item with that ID"})
    }else{
      FoodItem.findById(req.params.foodID,function(err,foodItem){
        if(err){
          res.json({success: false, error: "Database Error When searching for Food Items"});
        }else if(foodItem.seller_id !== Seller._id){
          res.json({success:false, error: "You do not have permission to edit this item"})
        }
        }else{
          foodItem.name = req.body.name;
          foodItem.save(function(err){
            if(err){
              res.json({success:false, error: "Could not Update Food Item"});
            }else{
              res.json({success:true, message: "Sucessfully Updated Food Items", data: foodItems});

            }
          })
        }
      })
    }
  });
}
};
