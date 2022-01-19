const { UserService } = require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const Api=require("../utils/api")

const validateUserId=async(req,res,next)=>{

    if(req.ok)
    {
        try
        {
            let user_id=req.body.user_id;

            let user_data=await Api.get(UserService.FETCH_USER_DETAILS_API_BASEURL+`?email=${user_id}`);
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

module.exports=validateUserId;