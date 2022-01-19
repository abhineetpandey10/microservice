// Module imports
const User = require("../db/schema/User");
const Error = require("../../utilities/classes/Error");
const { operation, error} = require("../../constants/constants");
const DatabaseService = require("../db/service/DatabaseService");
const { config } = require("../db/config/config");
const handleError = require("../../utilities/functions/handleError");

const readUserDetails=async(req,res,next)=>{

    let email=req.query.email;

    req.opcode=operation.FETCH_USER_DATA;

    try
    {
        
        //Connect to database
        await DatabaseService.connect(config);

        req.ok=true;

        //Retrieve the data from the users Database
        let userData=await User.findOne({email:email})

        if(userData===null)
        {
            throw new Error(error.USER_NOT_FOUND.Code,error.USER_NOT_FOUND.Message);
        }
        else
        {
            console.log(userData);

            req.data={
                userID:userData._id,
                firstName:userData.firstName,
                lastName:userData.lastName,
                email:userData.email,
                phoneNumber:userData.phoneNumber
            }
        }

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

module.exports=readUserDetails;