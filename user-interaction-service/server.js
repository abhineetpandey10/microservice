//module imports
const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const router = require("./routes/user-interaction-routes");
const formData=require("express-form-data");

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use(formData.parse());

app.use("/user_interaction",router)

const PORT = process.env.PORT || 3003;

app.listen(PORT, ()=>{
    console.log(`User Interaction Service started on PORT ${PORT}`)
})