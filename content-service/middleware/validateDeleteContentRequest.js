const { error } = require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const Error=require("../../utilities/classes/Error")

const validateDeleteContentRequest=(req, res, next)=>{
    
    req.ok=true;

    try
    {
        let contentID=req.body.contentID;

        if(contentID===null || contentID===undefined)
            throw new Error(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message);
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

module.exports=validateDeleteContentRequest;