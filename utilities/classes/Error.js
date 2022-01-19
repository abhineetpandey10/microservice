var {response}=require("../../constants/constants")

class Error
{
    constructor(code, message)
    {
        this.status=response.FAILURE
        this.code=code;
        this.message=message;
    }
    
}

module.exports=Error;