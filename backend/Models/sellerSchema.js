var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSeller = new Schema({
    name: {
        first: String,
        last: String
    },
    password_has: String,
    email: String,
    createDate: {
        type: Date,
        default: Date.now
    },
    api_token: String,
    businessName: String,
    orders: [],
    rating: Number,
    reviews: [],
    foodItems: [],
    businessType: String,
    location: {
        address: {
            street: String,
            city: String,
            state: String
        },
        lat: Number,
        long: Number
    },
    account_proved: Boolean
});