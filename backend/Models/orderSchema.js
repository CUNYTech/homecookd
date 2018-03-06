var mongoose = require('mongoose');
var Schema = mongoose.Schema

var orderSchema = new Schema({
    _id: Schema.Types.ObjectId
    userName: String,
    name: {
        first: String,
        last: String
    }
    foodItems: [],
    orderPlaced: {
        type: Date, 
        default: Date.now()
    },
    orderStatus: {
        orderReceived: Boolean,
        orderPrepping: Boolean,
        outForDelivery: Boolean,
        delivered: Boolean
    }
});

module.exports = mongoose.model('Order', orderSchema);