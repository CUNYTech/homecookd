var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodItemSchema = new Schema ({
    name: String,
    images: [String],
    ingredients: [String],
    allergens: [String],
    seller_id: String,
    foodType: String,
    description: String,
    price: Number
});


module.exports =  mongoose.model('FoodItem', foodItemSchema);


