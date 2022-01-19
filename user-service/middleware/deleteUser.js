// Module imports
const User = require("../db/schema/User");
const DatabaseService = require("../db/service/DatabaseService");
const { response, operation } = require("../../constants/constants");
const { config } = require("../db/config/config");
const handleError = require("../../utilities/functions/handleError");

const deleteUser=async(req,res,next)=>{

    if(req.ok)
    {
        let email=req.body.email;

        req.opcode=operation.DELETE_USER;

        try
        {
        
            //Connect to database
            await DatabaseService.connect(config)

            req.ok=true;

            //Update the data in the users Database
            let deletionData=await User.deleteOne({email:email});
    
            console.log(response.USER_DELETE_SUCCESSFUL);
            console.log(deletionData);

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

module.exports=deleteUser;