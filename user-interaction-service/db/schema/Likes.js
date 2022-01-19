const mongoose=require("mongoose")

/**
 *  MongoDB Schema for storing the Content Data
 */

const Likes=mongoose.Schema({
    _id:String,
    users:Array
})

module.exports=mongoose.model("Likes",Likes);