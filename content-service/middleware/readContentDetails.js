// Module imports
const DatabaseService=require("../db/service/DatabaseService");
var {response, error, operation}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const Error = require("../../utilities/classes/Error");
const Content = require("../db/schema/Content");
const { getUTCTimestamp } = require("../../utilities/functions/timestamp");
const { config } = require("../db/config/config");

const readContentDetails=async(req,res,next)=>{

    let contentID=req.query.contentID;

    req.opcode=operation.FETCH_CONTENT_DETAILS;

    try
    {
        
        //Connect to database
        await DatabaseService.connect(config);

        req.ok=true;

        //Retrieve the data from the content Database
        let contentData=await Content.findOne({_id:contentID})

        if(contentData===null)
        {
            throw new Error(error.INVALID_CONTENT_ID.Code, error.INVALID_CONTENT_ID.Message);
        }
        else
        {
            console.log(response.CONTENT_FETCHED+` ${contentID}`);
            console.log(contentData);

            req.data={
                _id:contentData._id,
                title:contentData.title,
                story:contentData.story,
                user_id:contentData.user_id,
                time_published:getUTCTimestamp(contentData.timestamp)
            }

            req.contentID=contentID;
        }

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

module.exports=readContentDetails;