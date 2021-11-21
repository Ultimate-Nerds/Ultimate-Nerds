const router = require("express").Router();
const User = require("../models/User");
const Buy = require("../models/Buy");

//  Buying

router.post("/", async(req,res)=>{
    const newBuy = new Buy(req.body);
    if(req.body.amount> 1000){

        try{
            const savedBuy = await newBuy.save();
            res.status(200).json(savedBuy);
    
        }catch(err)
        {
            res.status(500).json(err);
        }
    }else{
        res.status(500).json("Amount should be greater than 1000/-")
    }
})


//  Updating buy order(buying more)

router.put("/:id", async(req,res)=>{
    try{
        const post = await Buy.findById(req.params.id);
        if(buy.username = req.body.username){
            try{
                const updatedBuy = await Buy.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    {new: true}
                );
                res.status(200).json(updatedBuy)
            } catch(err) {
                res.status(500).json(err);
            }
        }else{
            res.status(401).json();
        }
    } catch(err){
        res.status(500).json(err);
    }
});


// Get details of investment

router.get("/:id", async(req,res)=>{
    try{
        const buy = await Buy.findById(req.params.id);
        res.status(200).json(post);
    } catch(err){
        res.status(500).json(err);
    }
});

// Get details of every investment

router.get("/", async (req,res)=>{
    const username = req.query.user;
    const catname = req.query.cat;

    try{
        let buy;
        if(username){
            buy = await Buy.find({username});
        }
        else if(catname){
            buy = await Buy.find({
                categories:{
                    $in: [catname],
                },
            });
        }else{
            buy = await Buy.find();
        }
        res.status(200).json(buy);
    } catch (err){
        res.status(500).json(err);
    }

});

module.exports = router;

