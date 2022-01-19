const { UserInteractionService } = require("../../constants/constants");
const Api=require("../utils/api")

class userInteractionAPIService
{
    static async addNew(contentID)
    {
        try
        {
            let data={contentID:contentID}

            let addNew_response=await Api.post(UserInteractionService.ADD_NEW_API_URL,data);

            if(addNew_response.status==='Success')
                console.log(UserInteractionService.ADD_NEW_API_URL+` API invoked successfully`)
        }
        catch(err)
        {
            throw err;
        }
    }

    static async getAllLikes(contentID)
    {
        try
        {
            let data={contentID:contentID}

            let allLikes_response=await Api.post(UserInteractionService.ALL_LIKES_API_URL,data);

            if(allLikes_response.status==='Success')
            {
                console.log(UserInteractionService.ALL_LIKES_API_URL+` API invoked successfully`);

                return allLikes_response.data
            }
        }
        catch(err)
        {
            throw err;
        }
    }

    static async getAllReads(contentID)
    {
        try
        {
            let data={contentID:contentID}

            let allReads_response=await Api.post(UserInteractionService.ALL_READS_API_URL,data);

            if(allReads_response.status==='Success')
            {
                console.log(UserInteractionService.ALL_READS_API_URL+" API invoked successfully");

                return allReads_response.data;       
            }
        }
        catch(err)
        {
            throw err;
        }
    }
}

module.exports=userInteractionAPIService