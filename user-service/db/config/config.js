const dotenv=require("dotenv")

dotenv.config();

const config={
    MONGODB_CONNECTION_STRING:'mongodb+srv://hummigo:hummigo@cluster0.efavu.mongodb.net/users?retryWrites=true&w=majority',
    DB_NAME:"users"
}

module.exports={config};