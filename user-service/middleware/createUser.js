// Module imports
const User = require("../db/schema/User");
var {response, operation}=require("../../constants/constants");
var {config}=require("../db/config/config")
const DatabaseService = require("../db/service/DatabaseService");
const handleError = require("../../utilities/functions/handleError");

const createUser=async(req,res,next)=>{

    if(req.ok)
    {
        let email=req.body.email;

        let userData={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:email,
            phoneNumber:req.body.phoneNumber
        }

        let user=new User(userData);

        req.opcode=operation.CREATE_USER;

        try
        {
            //Connect to database
            await DatabaseService.connect(config);

            req.ok=true;

            //Save the data to the users Database
            let saveData=await user.save();
    
            console.log(response.USER_CREATION_SUCCESSFUL);
            console.log(saveData);

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

module.exports=createUser;