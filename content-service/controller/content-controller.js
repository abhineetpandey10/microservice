const {error, operation, response}=require("../../constants/constants");
const getDataJSONObject = require("../../utilities/functions/getDataJSONObject");
const getErrorJSONObject = require("../../utilities/functions/getErrorJSONObject");
const getSuccessJSONObject = require("../../utilities/functions/getSuccessJSONObject")

const ContentController=(req, res)=>{

    if(req.ok)
    {
        switch(req.opcode)
        {
            case operation.CREATE_CONTENT:

                res.status(200).json(getSuccessJSONObject(operation.CREATE_CONTENT, response.CONTENT_ADDED+`${req.contentID}`))
                break;

            case operation.FETCH_CONTENT_DETAILS:

                res.status(200).json(getDataJSONObject(operation.FETCH_CONTENT_DETAILS, response.CONTENT_FETCHED+`${req.contentID}`,
                                                        req.data))
                break;

            case operation.UPDATE_CONTENT:

                res.status(200).json(getSuccessJSONObject(operation.UPDATE_CONTENT, response.CONTENT_UPDATED+`${req.contentID}`))
                break;

            case operation.DELETE_CONTENT:

                res.status(200).json(getSuccessJSONObject(operation.DELETE_CONTENT, response.CONTENT_DELETED+`${req.contentID}`))
                break;

            case operation.SERVE_NEW_CONTENT:

                res.status(200).json(getDataJSONObject(operation.SERVE_NEW_CONTENT,response.NEW_CONTENT_FETCHED,req.data))
                break;

            case operation.SERVE_POPULAR_CONTENT:

                res.status(200).json(getDataJSONObject(operation.SERVE_POPULAR_CONTENT,response.POPULAR_CONTENT_FETCHED,req.data))
                break;

            case operation.POPULATE_DATABASE:

                res.status(200).json(getSuccessJSONObject(operation.POPULATE_DATABASE, response.CONTENT_DATABASE_POPULATED));
                break;
        }
    }
    else
    {
        switch(req.error_code)
        {
            case error.DATABASE_CONNECT_ERROR.Code:
                
                res.status(500).json(getErrorJSONObject(error.DATABASE_CONNECT_ERROR.Code, error.DATABASE_CONNECT_ERROR.Message))
                break;

            case error.REQUEST_VALIDATION_FAILED.Code:

                res.status(403).json(getErrorJSONObject(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message))
                break;

            case error.INVALID_CONTENT_ID.Code:

                res.status(404).json(getErrorJSONObject(error.INVALID_CONTENT_ID.Code, error.INVALID_CONTENT_ID.Message))
                break;

            case error.USER_NOT_FOUND.Code:

                res.status(404).json(getErrorJSONObject(error.USER_NOT_FOUND.Code, error.USER_NOT_FOUND.Message))
                break;

            default:

                res.status(500).json(getErrorJSONObject(error.UNKNOWN_ERROR.Code, error.UNKNOWN_ERROR.Message))
                break;
        }
    }

}

module.exports=ContentController