const fs=require('fs');
const csv=require('fast-csv');
const handleError = require('../../utilities/functions/handleError');


const processCSVData=(req, res, next)=>{

    req.ok=true;

    try
    {
        var fileRows=[];

        console.log("CSV File Path is: "+req.files.file.path);

        csv.parseFile(req.files.file.path)
        .on("data",data=>{

            let liked_by=data[1];
            let read_by=data[2];

            data[1]=liked_by.substring(1,liked_by.length-1).split(',');
            data[2]=read_by.substring(1,read_by.length-1).split(',');

            fileRows.push(data);
        })
        .on("end",()=>{
            
            //Remove the first row data as it contains the column heading of each column, not the actual data
            fileRows=fileRows.filter((row,row_index)=>row_index!==0)

            console.log(fileRows);
            req.data=fileRows;

            next();

        })
    }
    catch(err)
    {
        handleError(req, err);
        next();
    }
}

module.exports=processCSVData;