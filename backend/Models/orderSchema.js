var mongoose = require('mongoose');
var Schema = mongoose.Schema

var orderSchema = new Schema({
    seller_id: String,
    user_id: String,
    foodItems: [String],
    orderPlaced: {
        type: Date, 
        default: Date.now()
    },
    delivery_location: {
        address: {
            street: String,
            city: String,
            state: String
        },
        lat: Number,
        long: Number
    },
    orderStatus: {
        orderReceived: Boolean,
        orderPrepping: Boolean,
        outForDelivery: Boolean,
        delivered: Boolean
    }
});

module.exports = mongoose.model('Order', orderSchema);