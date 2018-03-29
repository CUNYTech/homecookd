var mongoose = require('mongoose')
var Schema = mongoose.Schema

var foodTypeSchema = new Schema ({
	type: String,
	seller_id: String,
}); 

module.exports = mongoose.model('FoodType', foodTypeSchema);


