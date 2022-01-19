const { operation } = require("../../constants/constants");
const { config } = require("../db/config/config");
const Reads = require("../db/schema/Reads");
const DatabaseService = require("../db/service/DatabaseService");

const fetchAllUserReads=async(req, res, next)=>{

    if(req.ok)
    {
        let contentID=req.body.contentID;

        //Connect to the user_iteraction Database
        DatabaseService.connect(config);

        //Get All User Reads for the given Content
        let userReadData=await Reads.findOne({_id:contentID})

        console.log(userReadData);

        req.opcode=operation.FETCH_ALL_READS;

        req.data=userReadData;

        next();

    }
    else
    {
        next();
    }
}

module.exports=fetchAllUserReads;