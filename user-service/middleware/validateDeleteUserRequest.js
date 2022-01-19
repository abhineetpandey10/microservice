//module imports
const { error } = require("../../constants/constants");
const Error=require("../../utilities/classes/Error");
const handleError = require("../../utilities/functions/handleError");

//Middleware function to check if the request body contains all the required parameters for deleting a User
const validateDeleteUserRequest=(req, res, next)=>{
    
    req.ok=true;

    try
    {
        let email=req.body.email;

        if(email===null || email===undefined)
            throw new Error(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message);

    }
    catch(err)
    {
        handleError(req,err)
    }
    finally
    {
        next();
    }

}

module.exports=validateDeleteUserRequest