//module imports
const { operation, response, error } = require("../../constants/constants");
const getDataJSONObject = require("../../utilities/functions/getDataJSONObject");
const getErrorJSONObject = require("../../utilities/functions/getErrorJSONObject");
const getSuccessJSONObject = require("../../utilities/functions/getSuccessJSONObject");

const UserController=(req,res)=>{
    if(req.ok)
    {
        switch(req.opcode)
        {
            case operation.CREATE_USER:

                res.status(200).json(getSuccessJSONObject(operation.CREATE_USER, response.USER_CREATION_SUCCESSFUL));
                break;
            
            case operation.FETCH_USER_DATA:

                res.status(200).json(getDataJSONObject(operation.FETCH_USER_DATA,response.SUCCESS,req.data));
                break;

            case operation.UPDATE_USER:

                res.status(200).json(getSuccessJSONObject(operation.UPDATE_USER, response.USER_UPDATE_SUCCESSFUL))
                break;

            case operation.DELETE_USER:

                res.status(200).json(getSuccessJSONObject(operation.DELETE_USER, response.USER_DELETE_SUCCESSFUL))
                break;

            case operation.POPULATE_DATABASE:

                res.status(200).json(getSuccessJSONObject(operation.POPULATE_DATABASE, response.USER_DATABASE_POPULATED))
                break;
        }
    }
    else
    {
        var error_code=''

        if(req.error_code!==null && req.error_code!==undefined)
            error_code=req.error_code.toString()
        
        switch(error_code)
        {
            case error.DATABASE_CONNECT_ERROR.Code:

                res.status(500).json(getErrorJSONObject(error.DATABASE_CONNECT_ERROR.Code, error.DATABASE_CONNECT_ERROR.Message));
                break;

            case error.DUPLICATE_KEY_ERROR.Code:
                res.status(403).json(getErrorJSONObject(error.DUPLICATE_KEY_ERROR.Code, error.DUPLICATE_KEY_ERROR.Message));
                break;

            case error.REQUEST_VALIDATION_FAILED.Code:

                res.status(403).json(getErrorJSONObject(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message));
                break;

            case error.USER_NOT_FOUND.Code:
                
                res.status(404).json(getErrorJSONObject(error.USER_NOT_FOUND.Code, error.USER_NOT_FOUND.Message));
                break;

            default:
            
                res.status(500).json(getErrorJSONObject(error.UNKNOWN_ERROR.Code, error.UNKNOWN_ERROR.Message))
                break;
        }
    }
}

module.exports=UserController