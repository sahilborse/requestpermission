const mongoose=require("mongoose");
require("dotenv").config()
// db is connected
const connect=mongoose.connect(process.env.MONGODB_URL);
connect.then(()=>{console.log("MongoDB is connected")});


const appUsagePermission=new mongoose.Schema({
  permission:{
        type:Boolean,
        default:false,
        required:true
    },
   id:{
        type:String,
        required:true
   }
})



const collection= new mongoose.model("login",appUsagePermission);

module.exports={collection};