const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        // required: true,
    },
    fathername:{
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    panno:{
        type: String,
    },
    mob_no:{
        type: Number,
        unique: false,
    },
    profilePic:{
        type: String,
        default: "",
    },
    state:{
        type: String,
        // required: true,
    },
    address:{
        type: String
    }

},{timestamp: true})

module.exports = mongoose.model("User", UserSchema);