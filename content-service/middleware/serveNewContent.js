// Module imports
var {operation}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { getUTCTimestamp } = require("../../utilities/functions/timestamp");

const serveNewContent=async(req,res,next)=>{

    if(req.ok)
    {
        req.opcode=operation.SERVE_NEW_CONTENT;

        try
        {
            let newContentData=req.data;

            newContentData=newContentData.sort((a,b)=>{
                return Date.parse(b.timestamp)-Date.parse(a.timestamp)
            })
            
            console.log(newContentData);

            req.data=newContentData;

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
}

module.exports=serveNewContent;