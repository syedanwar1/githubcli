var mongoose = require('mongoose');

var userModel =new mongoose.Schema({
    username :{
    type: String,
    required: [true,'userName is required'],
    unique: true
    },
    email: {
    type: String,
    required: [true,'email is required'],
    },
    password:{
    type: String,
    required: [true,'password is required'],
    }
})

var User = mongoose.model("User", userModel);

module.exports = User;