const router = require("express").Router();
const Order = require("../models/Order")


router.post("/", async(req,res)=>{
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(err);
    }
})


// UPDATE

router.put("/:id",async(req,res)=>{

        try{
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {new: true}
            );
            res.status(200).json(updatedOrder);
        }catch(err){
            res.status(500).json(err);
        }
});


router.delete("/:id", async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})

// GET user orders

router.put('/find/:userid', async(req, res)=>{
    try{
        const orders = await Order.find({userId : req.params.id});
        res.status(200).json(orders);
    } catch(err){
        res.status(500).json(err);
    }
})
// get all


router.get("/", async(req,res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders)
    }
    catch(err){
        res.status(500).json(err);
    }
})

// 
module.exports = router;