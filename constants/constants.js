/**
 * File for storing constant values that would be used multiple times throughout the user service 
 */

var error=
    {
        DATABASE_CONNECT_ERROR:
        {
            Code:"5003",
            Message:"An error occured. Forced to close the connection to the database",
        },
        INVALID_CONTENT_ID:
        {
            Code:"4006",
            Message:"The provided Content ID is invalid. No story is available for this Content ID"
        },
        DUPLICATE_KEY_ERROR:
        {
            Code:"11000",
            Message:"An account already exists for this email ID"
        },
        USER_VALIDATION_FAILED:
        {
            Code:"4006",
            Message:"Failed to record Interaction. The provided User Email ID is invalid"
        },
        REQUEST_VALIDATION_FAILED:
        {
            Code:"4003",
            Message:"The requested operation could not be performed as missing or null parameters were encountered."
        },
        USER_NOT_FOUND:
        {
            Code:"4043",
            Message:"No User Account exists for the given email ID"
        },
        UNKNOWN_ERROR:
        {
            Code:"5001",
            Message:"An unknown error occured. Please contact the system admin for more details"
        }
    }

var response=
    {
        SUCCESS:"Success",
        FAILURE:"Failure",
        CONTENT_ADDED:"Content Added Successfully with Content ID ",
        CONTENT_FETCHED:"Content Details Fetched Successfully with Content ID ",
        CONTENT_UPDATED:"Content Updated Successfully with Content ID ",
        CONTENT_DELETED:"Content Deleted Successfully with Content ID ",
        NEW_CONTENT_FETCHED:"Fetched all Content sorted by timestamp of the time when the content was published",
        POPULAR_CONTENT_FETCHED:"Fetched all Content sorted by the user-interaction that each content item encountered",
        USER_CREATION_SUCCESSFUL: "User created Successfully!",
        USER_UPDATE_SUCCESSFUL: "User details updated Successfully!",
        USER_DELETE_SUCCESSFUL:"User deleted Successfully!",
        NEW_CONTENT_ADDED:"New content Added to the user_interaction Database for recording user interactions. ContentID: ",
        CONTENT_ID_VALIDATED:"Content ID validated Successfully!",
        USER_DATABASE_POPULATED:"User Database populated for testing!",
        CONTENT_DATABASE_POPULATED:"Content Database populated for testing!",
        USER_INTERACTION_DATABASE_POPULATED:"User Interaction Database populated for testing!"
    }

var operation=
    {
        CREATE_CONTENT:"CREATE_CONTENT",
        UPDATE_CONTENT:"UPDATE_CONTENT",
        DELETE_CONTENT:"DELETE_CONTENT",
        SERVE_CONTENT:"SERVE_CONTENT",
        FETCH_CONTENT_DETAILS:"FETCH_CONTENT_DETAILS",
        SERVE_NEW_CONTENT:"SERVE_NEW_CONTENT",
        SERVE_POPULAR_CONTENT:"SERVE_POPULAR_CONTENT",
        RECORD_LIKE:"RECORD_LIKE",
        REMOVE_LIKE:"REMOVE_LIKE",
        RECORD_READ:"RECORD_READ",
        CREATE_USER:"CREATE_USER",
        FETCH_USER_DATA:"FETCH_USER_DATA",
        UPDATE_USER:"UPDATE_USER",
        DELETE_USER:"DELETE_USER",
        FETCH_ALL_LIKES:"FETCH_ALL_LIKES",
        FETCH_ALL_READS:"FETCH_ALL_READS",
        ADD_NEW_CONTENT:"ADD_NEW_CONTENT",
        POPULATE_DATABASE:"POPULATE_DATABASE"
    }

var ContentService=
    {
        CREATE_CONTENT_API_URL:"http://localhost:3002/content/create",
        UPDATE_CONTENT_API_URL:"http://localhost:3002/content/update",
        DELETE_CONTENT_API_URL:"http://localhost:3002/content/delete",
        FETCH_CONTENT_DETAILS_API_BASEURL:"http://localhost:3002/content/details",
        NEW_CONTENT_API_URL:"http://localhost:3002/content/details/serve/new",
        POPULAR_CONTENT_API_URL:"http://localhost:3002/content/details/serve/popular",
        POPULATE_CONTENTDB_API_URL:"http://localhost:3002/content/data/ingest"
    }

var UserService=
    {
        CREATE_USER_API_URL:"http://localhost:3001/user/create",
        UPDATE_USER_API_URL:"http://localhost:3001/user/update",
        DELETE_USER_API_URL:"http://localhost:3001/user/delete",
        FETCH_USER_DETAILS_API_BASEURL:"http://localhost:3001/user/details",
        POPULATE_USERDB_API_URL:"http://localhost:3001/user/data/ingest"
    }

var UserInteractionService=
    {
        RECORD_LIKE_API_URL:"http://localhost:3003/user_interaction/likes/add",
        REMOVE_LIKE_API_URL:"http://localhost:3003/user_interaction/likes/remove",
        RECORD_READ_API_URL:"http://localhost:3003/user_interaction/reads/add",
        ALL_LIKES_API_URL:"http://localhost:3003/user_interaction/likes/all",
        ALL_READS_API_URL:"http://localhost:3003/user_interaction/reads/all",
        ADD_NEW_API_URL:"http://localhost:3003/user_interaction/add/new_content",
        POPULATE_USERINTERACTION_DB_API_URL:"http://localhost:3003/user_interaction/data/ingest"
    }

module.exports={error, response, operation, ContentService, UserService, UserInteractionService};