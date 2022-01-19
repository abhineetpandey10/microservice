//Module imports
const express=require("express");
const UserController = require("../controller/user-controller");
const createUser = require("../middleware/createUser");
const deleteUser = require("../middleware/deleteUser");
const ingestCSVData = require("../middleware/ingestCSVData");
const processCSVData = require("../middleware/processCSVData");
const readUserDetails = require("../middleware/readUserDetails");
const updateUser = require("../middleware/updateUser");
const validateCreateUserRequest = require("../middleware/validateCreateUserRequest");
const validateDeleteUserRequest = require("../middleware/validateDeleteUserRequest");
const validateUpdateUserRequest = require("../middleware/validateUpdateUserDetails");

//Express Router for creating routes related to CRUD operations on Users 
const router=express.Router();

//Express Route for creating a User
router.post("/create",validateCreateUserRequest,createUser, UserController);

//Express Route for fetching the details of a user
router.get("/details",readUserDetails,UserController);

//Express Route for updating a User
router.post("/update",validateUpdateUserRequest,updateUser,UserController);

//Express Route for deleting a User
router.post("/delete",validateDeleteUserRequest,deleteUser, UserController);

//Express Route for data ingestion via CSV
router.post("/data/ingest",processCSVData,ingestCSVData, UserController);

module.exports=router;