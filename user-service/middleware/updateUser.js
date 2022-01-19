// Module imports
const { operation, response } = require("../../constants/constants");
const DatabaseService = require("../db/service/DatabaseService");
const handleError = require("../../utilities/functions/handleError");
const { config } = require("../db/config/config");
const User = require("../db/schema/User");

const updateUser=async(req,res,next)=>{

    if(req.ok)
    {
        let email=req.body.email;
        let fname=req.body.firstName;
        let lname=req.body.lastName;
        let phno=req.body.phoneNumber;

        let userData={
            firstName:fname,
            lastName:lname,
            email:email,
            phoneNumber:phno
        }

        req.opcode=operation.UPDATE_USER;

        try
        {
            //Connect to database
            await DatabaseService.connect(config)

            req.ok=true;

            //Update the data in the users Database
            let updateData=await User.updateOne({email:email}, userData);
    
            console.log(response.USER_UPDATE_SUCCESSFUL);
            console.log(updateData);
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

module.exports=updateUser;