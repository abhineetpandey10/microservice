const { response, operation } = require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { config } = require("../db/config/config");
const Content=require("../db/schema/Content")
const DatabaseService = require("../db/service/DatabaseService");

const ingestCSVData=async(req, res, next)=>{

    if(req.ok)
    {
        try
        {
            let csv_data=[];

            Promise.all(csv_data=req.data.map(async(item)=>{
            
                let dataItem={
                    _id:item[0],
                    title:item[1],
                    story:item[2],
                    timestamp:item[3],
                    user_id:item[4]
                }

                let content=new Content(dataItem)

                //Connect to the users Database
                await DatabaseService.connect(config)

                //Populate the database with the CSV Data items one by one
                let saveData=await content.save();

                console.log(saveData);

            }))
            .then(()=>{
                console.log(response.CONTENT_DATABASE_POPULATED);

                req.opcode=operation.POPULATE_DATABASE;

                next();
            })
            .catch(err=>handleError(req,err));
        }
        catch(err)
        {
            handleError(req, err);
            next();
        }
    }
    else
    {
        next();
    }

}

module.exports=ingestCSVData;