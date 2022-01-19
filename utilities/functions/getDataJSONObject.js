const {response}=require("../../constants/constants")

const getDataJSONObject=(opcode, message, data)=>
{
    let data_json={
        status: response.SUCCESS,
        opcode:opcode,
        message:message,
        data: data
    }

    return data_json;
}

module.exports=getDataJSONObject;