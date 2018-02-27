var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var registerUser = new Schema({
    name: {
        first: String,
        last: String
    },
    password_hash: String,
    email: String,
    userName: String,
    createDate: {
        type: Date,
        default: Date.now
    },
    api_token: String,
    // user will customize its account to be a seler, but will need to wait to get approved by photo and video
    seller: Boolean,
    account_proved: Boolean,
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
    }
});