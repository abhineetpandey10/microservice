const { operation } = require("../../constants/constants");
const { config } = require("../db/config/config");
const Likes = require("../db/schema/Likes")
const DatabaseService = require("../db/service/DatabaseService");

const fetchAllUserLikes=async(req, res, next)=>{

    if(req.ok)
    {
        let contentID=req.body.contentID;

        //Connect to the user_iteraction Database
        DatabaseService.connect(config);

        //Get All User Likes for the given Content
        let userLikesData=await Likes.findOne({_id:contentID})

        console.log(userLikesData);

        req.opcode=operation.FETCH_ALL_LIKES

        req.data=userLikesData;

        next();

    }
    else
    {
        next();
    }
}

module.exports=fetchAllUserLikes;