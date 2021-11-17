const router = require("express").Router();
// const Category = require("..models/Category");

router.get("/", async(req,res)=>{
    try{
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch(err){
        res.status(500).json(err);
    }
})