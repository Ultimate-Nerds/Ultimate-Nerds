const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mogoose = require('mongoose');
const authRoute = require('./routes/auth');
// const categoryRoute = require('./routes/categories');



dotenv.config();
app.use(express.json());

mogoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log("Connected to mongodb")).catch((err)=> console.log(err));


app.use("/api/auth", authRoute);
// app.use("/api/auth", authRoute)

app.use("/",(req, res)=>{
    console.log("main url")
})

app.listen("5000" , ()=>{
    console.log("Backend Is Running");
});