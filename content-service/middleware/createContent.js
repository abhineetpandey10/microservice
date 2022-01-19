// Module imports
const DatabaseService=require("../db/service/DatabaseService");
const Content=require("../db/schema/Content")
const Api=require("../utils/api");
const Error=require("../../utilities/classes/Error")
var {response, error, operation, UserInteractionService}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { getTimestampMillis } = require("../../utilities/functions/timestamp");
const generateContentID = require("../../utilities/functions/generateContentID");
const { config } = require("../db/config/config");
const userInteractionAPIService = require("../utils/userInteractionAPIService");

const createContent=async(req,res,next)=>{

    if(req.ok)
    {
        let title=req.body.title;
        let story=req.body.story;
        let user_id=req.body.user_id

        let contentID=generateContentID();

        let contentData={
            _id:contentID,
            title:title,
            story:story,
            user_id:user_id,
            timestamp:getTimestampMillis()
        }

        let content=new Content(contentData);

        req.opcode=operation.CREATE_CONTENT;

        try
        {
        
            //Connect to database
            await DatabaseService.connect(config);

            req.ok=true;

            //Save the data to the users Database
            let saveData=await content.save();
            console.log(saveData);

            //Create a new resource with the user-interaction service, corresponding to this content
            let doc=await userInteractionAPIService.addNew(contentID);

            req.contentID=contentID;

            console.log(response.CONTENT_ADDED+` ${contentID}`);
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

module.exports=createContent;