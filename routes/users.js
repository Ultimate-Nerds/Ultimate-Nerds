const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const buy = require("../models/Buy");

// GET USER

router.put('/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const{ password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports  = router;