// Trying to see if this makes sense 
// As where the seller is able to add what type of food they sell 

var typeOfFood = require("../Models/foodTypeSchema");
var Seller = require("../Models/sellerSchema");


exports.foodTypeCreate = (req, res) => {
    if(req.body.seller_api_token === undefined || req.body.seller_api_token === ""){
        res.status(400).json ( {error: "Missing api_token in request"});
        return;
    } 
    Seller.find( {api_token: req.body.seller_api_token}, function(err, docs){
        if(!docs.length || err){
            res.status(401).json ({error:"Could not find seller with this api token"})
        } else {
            var tempFoodType = new typeOfFood();
            tempFoodType = req.body.name;
            var tempFoodType_id = tempFoodType.id;
            tempFoodType.save(function (err){
                if (err){
                    console.log("Error while saving to database");
                    res.status(500).send(err);
                } else {
                    sellerUpdateFoodTypeId(tempFoodType.seller_id, tempFoodType_id, res);
                }
            });
        }
    });
}

function sellerUpdateFoodTypeId(seller_id, tempFoodType_id , res)
{
    Seller.update({ _id: seller_id }, { $push: { food_items_id: tempFoodType_id } },
        function (err, numAffected, rawResponse) {
            if (err) {
                res.status(400).json("contact addMsg error: " + err);
            }else{
                res.status(201);
                res.json({ message: "Sucesfully registered", _id: tempFoodType_id });
            }
        }
    );
}