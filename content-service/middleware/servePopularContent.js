// Module imports
const DatabaseService=require("../db/service/DatabaseService");
var {operation}=require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const servePopularContent=async(req,res,next)=>{

    if(req.ok)
    {
        req.opcode=operation.SERVE_NEW_CONTENT;

        try
        {    
            let popularContentData=req.data;
        
            popularContentData=popularContentData.sort((a,b)=>{
                if(a.total_likes===b.total_likes)
                    return b.total_reads-a.total_reads;
                else
                    return b.total_likes-a.total_likes;
            });

            console.log(popularContentData);

            req.data=popularContentData;

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

module.exports=servePopularContent;