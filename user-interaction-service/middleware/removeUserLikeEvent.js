// Module imports
const DatabaseService=require("../db/service/DatabaseService");
const Likes=require("../db/schema/Likes");
var {operation}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const UserInteraction = require("../utils/UserInteraction");
const { config } = require("../db/config/config");

const removeUserLikeEvent=async(req,res,next)=>{

    if(req.ok)
    {
        try
        {

            let user_id=req.body.user_id;
            let contentID=req.body.contentID

            let allUserLikesData=req.data.users;
            allUserLikesData=allUserLikesData.filter(id=>id!==user_id);

            let likeData=new Likes({
                _id:contentID,
                users:allUserLikesData
            });
        
            //Connect to database
            await DatabaseService.connect(config);

            //Record the User Read Interaction for the given content in the Database
            let updateResult=await Likes.updateOne({_id:contentID},likeData)

            req.opcode=operation.REMOVE_LIKE;
    
            req.contentID=contentID;

            console.log(UserInteraction.likeRemoved(contentID, user_id));
            console.log(updateResult);
        }
        catch(error)
        {
            handleError(req, error);
        }
        finally
        {
            next();
        }
    }
    else
    {
        next();
    }
}

module.exports=removeUserLikeEvent;