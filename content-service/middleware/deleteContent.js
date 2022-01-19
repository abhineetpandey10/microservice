// Module imports
const DatabaseService=require("../db/service/DatabaseService");
const Content=require("../db/schema/Content")
const Error=require("../../utilities/classes/Error")
var {response, operation, error}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { config } = require("../db/config/config");

const deleteContent=async(req,res,next)=>{

    let contentID=req.body.contentID;

    req.opcode=operation.DELETE_CONTENT;

    try
    {
        
        //Connect to database
        await DatabaseService.connect(config);

        req.ok=true;

        //Update the data in the content Database
        let deletionData=await Content.deleteOne({_id:contentID});

        if(deletionData.deletedCount===0)
        {
            throw new Error(error.INVALID_CONTENT_ID.Code, error.INVALID_CONTENT_ID.Message);
        }
        else
        {
            console.log(response.CONTENT_DELETED+`${contentID}`);
            console.log(deletionData);
        }

        req.contentID=contentID;

    }
    catch(err)
    {
        handleError(req, err);
    }
    finally
    {
        next();
    }

}

module.exports=deleteContent;