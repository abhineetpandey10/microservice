const { response, operation } = require("../../constants/constants");
const handleError = require("../../utilities/functions/handleError");
const { config } = require("../db/config/config");
const User = require("../db/schema/User");
const DatabaseService = require("../db/service/DatabaseService");

const ingestCSVData=async(req, res, next)=>{

    if(req.ok)
    {
        try
        {
            let csv_data=[];

            Promise.all(csv_data=req.data.map(async(item)=>{
            
                let dataItem={
                    firstName:item[0],
                    lastName:item[1],
                    email:item[2],
                    phoneNumber:item[3]
                }

                let user=new User(dataItem);

                //Connect to the users Database
                await DatabaseService.connect(config)

                //Populate the database with the CSV Data items one by one
                let saveData=await user.save();

                console.log(saveData);

            }))
            .then(()=>{
                console.log(response.USER_DATABASE_POPULATED);

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