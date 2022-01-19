const {error, operation, response}=require("../../constants/constants");
const getDataJSONObject = require("../../utilities/functions/getDataJSONObject");
const getErrorJSONObject = require("../../utilities/functions/getErrorJSONObject");
const getSuccessJSONObject = require("../../utilities/functions/getSuccessJSONObject");
const UserInteraction = require("../utils/UserInteraction");

const UserInteractionController=(req, res)=>{

    if(req.ok)
    {
        switch(req.opcode)
        {
            case operation.RECORD_READ:

                res.status(200).json(getSuccessJSONObject(operation.RECORD_READ, UserInteraction.readRecorded(req.contentID, req.body.user_id)))
                break;

            case operation.RECORD_LIKE:

                res.status(200).json(getSuccessJSONObject(operation.RECORD_LIKE, UserInteraction.likeRecorded(req.contentID, req.body.user_id)))
                break;

            case operation.REMOVE_LIKE:

                res.status(200).json(getSuccessJSONObject(operation.REMOVE_LIKE, UserInteraction.likeRemoved(req.contentID, req.body.user_id)));
                break;

            case operation.FETCH_ALL_LIKES:

                res.status(200).json(getDataJSONObject(operation.FETCH_ALL_LIKES, response.SUCCESS, req.data))
                break;

            case operation.FETCH_ALL_READS:

                res.status(200).json(getDataJSONObject(operation.FETCH_ALL_READS, response.SUCCESS, req.data))
                break;

            case operation.ADD_NEW_CONTENT:

                res.status(200).json(getSuccessJSONObject(operation.ADD_NEW_CONTENT, response.NEW_CONTENT_ADDED+` ${req.body.contentID}`))
                break;

            case operation.POPULATE_DATABASE:

                res.status(200).json(getSuccessJSONObject(operation.POPULATE_DATABASE, response.USER_INTERACTION_DATABASE_POPULATED));
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

            case error.USER_NOT_FOUND.Code:

                res.status(403).json(getErrorJSONObject(error.USER_NOT_FOUND.Code, error.USER_NOT_FOUND.Message))
                break;

            case error.INVALID_CONTENT_ID.Code:

                res.status(404).json(getErrorJSONObject(error.INVALID_CONTENT_ID.Code, error.INVALID_CONTENT_ID.Message))
                break;

            case error.REQUEST_VALIDATION_FAILED.Code:

                res.status(403).json(getErrorJSONObject(error.REQUEST_VALIDATION_FAILED.Code, error.REQUEST_VALIDATION_FAILED.Message))
                break;

            default:
                res.status(500).json(getErrorJSONObject(error.UNKNOWN_ERROR.Code, error.UNKNOWN_ERROR.Message))
                break;
        }
    }

}

module.exports=UserInteractionController