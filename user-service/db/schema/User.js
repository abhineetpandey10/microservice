const mongoose=require("mongoose")

/**
 *  MongoDB Schema for storing the User Data
 */

const User=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    phoneNumber:String
})

module.exports=mongoose.model("User",User);