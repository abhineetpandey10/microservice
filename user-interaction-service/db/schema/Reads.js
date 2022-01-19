const mongoose=require("mongoose")

/**
 *  MongoDB Schema for storing the Content Data
 */

const Reads=mongoose.Schema({
    _id:String,
    users:Array
})

module.exports=mongoose.model("Reads",Reads);