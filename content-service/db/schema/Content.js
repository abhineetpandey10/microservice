const mongoose=require("mongoose")

/**
 *  MongoDB Schema for storing the Content Data
 */

const Content=mongoose.Schema({
    _id:String,
    title:{
        type:String,
        required:true
    },
    story:{
        type:String,
        required:true
    },
    timestamp:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Content",Content);