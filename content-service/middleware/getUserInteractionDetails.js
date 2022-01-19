const handleError = require("../../utilities/functions/handleError");
const userInteractionAPIService = require("../utils/userInteractionAPIService");
const {getUTCTimestamp}=require("../../utilities/functions/timestamp")

const getUserInteractionDetails=async(req, res, next)=>{
    
    if(req.ok)
    {
        try
        {

            let data=[];
            
            Promise.all(data=req.data.map(async(doc) => {

                //Fetch all the User Interactions for the given Content
                let likes=await userInteractionAPIService.getAllLikes(doc._id);
                let reads=await userInteractionAPIService.getAllReads(doc._id);

                let dataObj={
                    _id:doc._id,
                    title:doc.title,
                    story:doc.story,
                    timestamp:getUTCTimestamp(doc.timestamp),
                    user_id:doc.user_id,
                    total_likes:likes.users.length,
                    total_reads:reads.users.length,
                    liked_by:likes.users,
                    read_by:reads.users
                }

                return dataObj;
            }))
            .then(data=>{
                req.data=data;
                next();
            })
            .catch(err=>handleError(req,err));
        }
        catch(err)
        {
            handleError(req, err);
            next();
        }
    }
    else
    {
        next();
    }
}

module.exports=getUserInteractionDetails;