const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const route=require('./routes/userRoute');
const app=express();
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(route);

//atlas Url
const url=process.env.ATLAS_URL;
//mongoose connect
mongoose.connect(url)
.then(()=>console.log("connect to mongodb"))
.catch(err=>console.log("error occured",err));
const port=8080;
app.listen(port,()=>console.log(`listening to port ${port}`));