const { error } = require("../../constants/constants")
const Error=require("../../utilities/classes/Error");
const handleError = require("../../utilities/functions/handleError");

const validateCreateContentRequest=(req, res, next)=>{

    req.ok=true;

    try
    {
        let title=req.body.title;
        let story=req.body.story;

        if(title===null || title===undefined || story===null || story===undefined)
            throw new Error(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message)

    }
    catch(err)
    {
        handleError(req, err)
    }
    finally
    {
        next();
    }
}

module.exports=validateCreateContentRequest;