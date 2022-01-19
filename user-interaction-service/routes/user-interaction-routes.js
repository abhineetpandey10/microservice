const express=require("express");
const UserInteractionController = require("../controller/user-interaction-controller");
const addNewContent = require("../middleware/addNewContent");
const fetchAllUserLikes = require("../middleware/fetchAllUserLikes");
const fetchAllUserReads = require("../middleware/fetchAllUserReads");
const ingestCSVData = require("../middleware/ingestCSVData");
const processCSVData = require("../middleware/processCSVData");
const recordUserLikeEvent = require("../middleware/recordUserLikeEvent");
const recordUserReadEvent = require("../middleware/recordUserReadEvent");
const removeUserLikeEvent = require("../middleware/removeUserLikeEvent");
const validateAllInteractionsRequest = require("../middleware/validateAllInteractionsRequest");
const validateContentID = require("../middleware/validateContentID");
const validateUser = require("../middleware/validateUser");
const validateUserInteractionRequest = require("../middleware/validateUserInteractionRequest");

//Express Router for creating routes related to User Interaction with a given post
const router=express.Router();

//Express Route for recording User Read Event for a given content
router.post("/reads/add",validateUserInteractionRequest, validateContentID,validateUser, fetchAllUserReads, recordUserReadEvent,UserInteractionController);

//Express Route for recording User Like Event for a given content
router.post("/likes/add",validateUserInteractionRequest, validateContentID,validateUser, fetchAllUserLikes, recordUserLikeEvent,UserInteractionController);

//Express Route for removing a User's Like for a given content
router.post("/likes/remove", validateUserInteractionRequest, validateContentID,validateUser, fetchAllUserLikes, removeUserLikeEvent, UserInteractionController);

//Express Route for getting all User Read Interactions for a given content
router.post("/likes/all", validateAllInteractionsRequest, fetchAllUserLikes, UserInteractionController);

//Express Route for getting all User Like Interactions for a given content
router.post("/reads/all", validateAllInteractionsRequest,fetchAllUserReads, UserInteractionController);

//Express Route for creating a new Likes and Reads resource in the database for a newly added content
router.post("/add/new_content",validateAllInteractionsRequest,addNewContent,UserInteractionController)

//Express Route for data ingestion via CSV
router.post("/data/ingest", processCSVData, ingestCSVData, UserInteractionController);

module.exports=router;