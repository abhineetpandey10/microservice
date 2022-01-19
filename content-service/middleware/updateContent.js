// Module imports
const DatabaseService=require("../db/service/DatabaseService");
const Content=require("../db/schema/Content")
var {response, operation}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { config } = require("../db/config/config");

const updateContent=async(req,res,next)=>{

    if(req.ok)
    {
        let contentID=req.body.contentID;
        let title=req.body.title;
        let story=req.body.story;

        let contentData={
            title:title,
            story:story
        }

        req.opcode=operation.UPDATE_CONTENT;

        try
        {
        
            //Connect to database
            await DatabaseService.connect(config);

            req.ok=true;

            //Update the data in the users Database
            let updateData=await Content.updateOne({_id:contentID},contentData);
    
            console.log(response.CONTENT_UPDATED+`${contentID}`);
            console.log(updateData);

            req.contentID=contentID;

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

module.exports=updateContent;