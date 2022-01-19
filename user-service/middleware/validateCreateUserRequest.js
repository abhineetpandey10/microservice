//module imports
const { error } = require("../../constants/constants");
const Error=require("../../utilities/classes/Error");
const handleError = require("../../utilities/functions/handleError");

//Middleware function to check if the request body contains all the required parameters for creating a new User
const validateCreateUserRequest=(req, res, next)=>{

    req.ok=true;

    try
    {

        let fname=req.body.firstName;
        let lname=req.body.lastName;
        let email=req.body.email;
        let phno=req.body.phoneNumber;

        if(fname===null || fname===undefined || lname===null || lname===undefined ||
            email===null || email===undefined || phno===null || phno===undefined)
            {
                throw new Error(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message);
            }
    }
    catch(err)
    {
        handleError(req, err)
    }
    finally
    {
        next()
    }
}

module.exports=validateCreateUserRequest;