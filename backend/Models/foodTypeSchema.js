var mongoose = require('mongoose')
var Schema = mongoose.Schema

var foodTypeSchema = new Schema ({
    foodItem_id: String,
    name: String,
    type: String
});

module.exports = mongoose.model('Food Type', foodTypeSchema);
