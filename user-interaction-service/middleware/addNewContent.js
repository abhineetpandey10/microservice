const Reads=require("../db/schema/Reads");
const Likes=require("../db/schema/Likes");
const DatabaseService=require("../db/service/DatabaseService");
const {config}=require("../db/config/config");
const handleError = require("../../utilities/functions/handleError");
const { response, operation } = require("../../constants/constants");

const addNewContent=async(req,res,next)=>{
    
    if(req.ok)
    {
        let contentID=req.body.contentID;
        
        try
        {
            //Connect to the user_interaction Database
            await DatabaseService.connect(config);

            let data={
                _id:contentID,
                users:[]
            }

            let readsObj=new Reads(data);
            let likesObj=new Likes(data);

            //Create a new user read interaction resource on the database for the given content
            let readsCreationData=await readsObj.save();
            console.log(readsCreationData);

            //Create a new user like interaction resource on the database for the given content
            let likesCreationData=await likesObj.save();
            console.log(likesCreationData);

            req.opcode=operation.ADD_NEW_CONTENT;

            console.log(response.NEW_CONTENT_ADDED+` ${contentID}`);
        }
        catch(err)
        {
            handleError(req,err);
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

module.exports=addNewContent;