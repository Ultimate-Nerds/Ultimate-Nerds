const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    fathername:{
        type: String,
        required: true,
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
    pan_no:{
        type: String,
    },
    mob_no:{
        type: Number,
        unique: true,
        required: true,
    },
    userimg:{
        type: String,
        default: "",
    },
    state:{
        type: String,
        required: true,
    }

},{timestamp: true})

module.exports = mongoose.model("User", UserSchema);