const handleError=(req,error)=>{

    console.log(error);

    console.error(`Error occured with ERROR_CODE: ${error.code}`);

    console.error(error.message);

    req.ok=false;
    req.error_code=error.code;

}

module.exports=handleError;