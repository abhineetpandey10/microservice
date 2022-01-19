const axios=require("axios");
const { error} = require("../../constants/constants");
const Error = require("../../utilities/classes/Error");

class Api
{
    static async get(url, headers)
    {
        console.log(url)

        var config = {
            method: 'get',
            url: url,
            headers: { }
        };

        if(headers!==null && headers!==undefined)
            config.headers=headers;

        try
        {
            let apiResponse=await axios(config);

            return apiResponse.data;
        }
        catch(err)
        {
            if(err.response.data) //If the error originated in another service, the response sent would contain the error data
            {
                throw new Error(err.response.data.code, err.response.data.message)
            }
            else //If the error originated in this service while calling the API
                throw new Error(error.UNKNOWN_ERROR.Code, error.UNKNOWN_ERROR.Message)
        }
    }

    static async post(url, data, headers)
    {
        var config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data || ""
        };

        if(headers!==null && headers!==undefined)
            config.headers=headers;

        try
        {
            let apiResponse=await axios(config);
    
            return apiResponse.data;
        }
        catch(err)
        {
            if(err.response.data) //If the error originated in another service, the response sent would contain the error data
            {
                throw new Error(err.response.data.code, err.response.data.message)
            }
            else //If the error originated in this service while calling the API
                throw new Error(error.UNKNOWN_ERROR.Code, error.UNKNOWN_ERROR.Message)
        }
    }
}

module.exports=Api