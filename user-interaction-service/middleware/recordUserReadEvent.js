// Module imports
const DatabaseService=require("../db/service/DatabaseService");
const Reads=require("../db/schema/Reads");
const Error=require("../../utilities/classes/Error")
var {response, error, operation}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { getTimestampMillis } = require("../../utilities/functions/timestamp");
const UserInteraction = require("../utils/UserInteraction");
const { config } = require("../db/config/config");

const recordUserReadEvent=async(req,res,next)=>{

    if(req.ok)
    {
        try
        {

            let user_id=req.body.user_id;
            let contentID=req.body.contentID

            let allUserReadsData=req.data.users;
            allUserReadsData.push(user_id);

            let readData={
                _id:contentID,
                users:allUserReadsData
            };
        
            //Connect to database
            await DatabaseService.connect(config);

            //Record the User Read Interaction for the given content in the Database
            let updateResult=await Reads.updateOne({_id:contentID},readData)

            req.opcode=operation.RECORD_READ;
    
            req.contentID=contentID;

            console.log(UserInteraction.readRecorded(contentID, user_id));
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

module.exports=recordUserReadEvent;