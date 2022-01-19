const { response } = require("../../constants/constants");

const getSuccessJSONObject=(opcode, message)=>
{
    let success_json={
        status: response.SUCCESS,
        opcode:opcode,
        message:message
    }

    return success_json;
}

module.exports=getSuccessJSONObject;