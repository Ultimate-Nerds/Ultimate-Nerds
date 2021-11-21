const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    title:{
        type: String,
    },
    details:{
        type: String,
    },
    price:{
        type: Number
    }
},{timestamps: true})

module.exports = mongoose.model("Category", CategorySchema);