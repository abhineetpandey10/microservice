const { response, operation } = require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { config } = require("../db/config/config");
const Likes=require("../db/schema/Likes");
const Reads=require("../db/schema/Reads");
const DatabaseService = require("../db/service/DatabaseService");

const ingestCSVData=async(req, res, next)=>{

    if(req.ok)
    {
        try
        {
            let csv_data=[];

            Promise.all(csv_data=req.data.map(async(item)=>{
            
                let likesDataObj={
                    _id:item[0],
                    users:item[1]
                }

                let readsDataObj={
                    _id:item[0],
                    users:item[2]
                }

                let likes=new Likes(likesDataObj);
                let reads=new Reads(readsDataObj);

                //Connect to the users Database
                await DatabaseService.connect(config)

                //Populate the database with the CSV Data items one by one
                let saveLikesData=await likes.save();
                let saveReadsData=await reads.save();

                console.log(saveLikesData);
                console.log(saveReadsData);

            }))
            .then(()=>{
                console.log(response.USER_INTERACTION_DATABASE_POPULATED);

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