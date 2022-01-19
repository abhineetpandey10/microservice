const { ContentService, response } = require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const Api=require("../utils/api")

const validateContentID=async(req,res,next)=>{

    if(req.ok)
    {
        try
        {
            let contentID=req.body.contentID;

            let content_data=await Api.get(ContentService.FETCH_CONTENT_DETAILS_API_BASEURL+`?contentID=${contentID}`);

            if(content_data.data===null || content_data.data===undefined)
                req.ok=false;
            else
                console.log(response.CONTENT_ID_VALIDATED);
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
    else
    {
        next();
    }
}

module.exports=validateContentID;