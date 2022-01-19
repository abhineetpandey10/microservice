const handleError = require("../../utilities/functions/handleError");
const DatabaseService=require("../db/service/DatabaseService");
const {config}=require("../db/config/config");
const Content=require("../db/schema/Content")

const getAllContent=async(req, res, next)=>{
    
    req.ok=true;

    try
    {
        //Connect to database
        await DatabaseService.connect(config);

        req.ok=true;

        //Retrieve the data from the content Database
        let contentData=await Content.find({})

        req.data=contentData;
    }
    catch(err)
    {
        handleError(req, err);
    }
    finally
    {
        next();
    }
}

module.exports=getAllContent