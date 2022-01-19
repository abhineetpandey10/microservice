const { response } = require("../../constants/constants");

const getErrorJSONObject=(error_code, error_message)=>
{
    let error_json={
        status: response.FAILURE,
        code:error_code,
        message:error_message
    }

    return error_json;
}

module.exports=getErrorJSONObject;