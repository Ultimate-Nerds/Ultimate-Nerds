const mongoose = require("mongoose");

const BuySchema = new mongoose.Schema({
    amount:{
        type: Number,
        required: true,
    },
    categories:{
        type: String,
        required: true,
    },
    totalfunding:{
        type: Number,
    },
    noinvestors:{
        type: Number,
    },
    returntime:{
        type: Number,
        default: "1year",
    },


},{timestamps: true});

module.exports= mongoose.model("Buy",BuySchema);


