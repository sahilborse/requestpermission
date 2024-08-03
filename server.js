const express = require('express');
const {collection} = require('./MongoDB.js');


require("dotenv").config()
const app = express();
const PORT = 5000;

app.use(express.urlencoded({extends:false}));
app.use(express.json());

app.post("/grantPermission/:id",async(req,res)=>{
    const id=req.params.id;
    try{
    const userPresent = await collection.findOne({id:id});
    if(userPresent){
         userPresent.permission=true;
         await userPresent.save();
         return res.status(200).json(true)
    }else{
        await collection.insertMany({id:id,permission:true});
           return res.status(200).json(true)
    }}catch(error){
        console.log("error",error);
           return res.status(500).json({
                         error:error})
    }
})


app.get("/grantPermission/:id",async(req,res)=>{
    const id =req.params.id;
    try{
        const data = await collection.findOne({id:id})
        return res.json({permission:data.permission})
    }catch(error){
        console.log("error",error);
        return res.json({error:error});
    }
});

const port =process.env.PORT
app.listen(port , () => {
  console.log(`Server started on port ${port}`);
});