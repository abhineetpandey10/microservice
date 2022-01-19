const { error } = require("../../constants/constants");
const Error = require("../../utilities/classes/Error");
const handleError = require("../../utilities/functions/handleError");

const validateUserInteractionRequest=(req, res, next)=>{

    req.ok=true;

    try
    {
        let user_id=req.body.user_id;
        let contentID=req.body.contentID

        if(user_id===null || user_id===undefined || contentID===null || contentID===undefined)
            throw new Error(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message)
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

module.exports=validateUserInteractionRequest