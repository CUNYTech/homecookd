var mongoose = require("mongoose");

var customerSchema = new mongoose.Schema ({
    name: {
        first: String,
        last: String
        },
    email: String,
    password_hash: String,
    createDate: {
        default: Date.now,
        type: String
    },
    apiToken: String
});

module.exports = mongoose.model('Customer', customerSchema);