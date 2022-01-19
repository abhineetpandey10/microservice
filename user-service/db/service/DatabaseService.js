const mongoose=require("mongoose");

const { error } = require("../../../constants/constants");
const Error = require("../../../utilities/classes/Error");

class DatabaseService
{

    static async connect(config)
    {
        try
        {
            await mongoose.connect(config.MONGODB_CONNECTION_STRING,{
                useUnifiedTopology:true,
                useNewUrlParser:true
            });
        
            console.log(`Connection opened to ${config.DB_NAME} database`);
        }
        catch(err)
        {
            await mongoose.connection.close();

            throw new Error(error.DATABASE_CONNECT_ERROR.Code, error.DATABASE_CONNECT_ERROR.Message);
        }
    }

    static async disconnect()
    {
        
        try
        {
            await mongoose.disconnect();

            console.log(`Connection closed to  ${constants.config.DB_NAME} database`)
        }
        catch(err)
        {
            await mongoose.connection.close();

            throw new Error(error.DATABASE_CONNECT_ERROR.Code, error.DATABASE_CONNECT_ERROR.Message);
        }
    }

}
module.exports=DatabaseService;