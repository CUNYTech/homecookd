var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    admin: {
      type:Boolean,
      default: false
    },
    password_hash: String,
    email: String,
    userName: String,
    createDate: {
        type: Date,
        default: Date.now()
    },
    api_token: String,
    orders: [],
    reviews: [],
    foodItems: [],
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

module.exports = mongoose.model('User',userSchema);
