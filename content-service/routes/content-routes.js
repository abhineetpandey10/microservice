const express=require("express");
const processCSVData = require("../middleware/processCSVData");
const ContentController = require("../controller/content-controller");
const createContent = require("../middleware/createContent");
const deleteContent = require("../middleware/deleteContent");
const getAllContent = require("../middleware/getAllContent");
const getUserInteractionDetails = require("../middleware/getUserInteractionDetails");
const ingestCSVData = require("../middleware/ingestCSVData");
const readContentDetails = require("../middleware/readContentDetails");
const serveNewContent = require("../middleware/serveNewContent");
const servePopularContent = require("../middleware/servePopularContent");
const updateContent = require("../middleware/updateContent");
const validateCreateContentRequest = require("../middleware/validateCreateContentRequest");
const validateDeleteContentRequest = require("../middleware/validateDeleteContentRequest");
const validateUpdateContentRequest = require("../middleware/validateUpdateContentRequest");
const validateUserId = require("../middleware/validateUserId");

//Express Router for creating routes related to CRUD operations on Content
const router=express.Router();

//Express Route for creating Content
router.post("/create",validateCreateContentRequest,validateUserId,createContent,ContentController);

//Express Route for fetching the details of a Content
router.get("/details",readContentDetails,ContentController);

//Express Route for updating Content
router.post("/update",validateUpdateContentRequest,updateContent,ContentController);

//Express Route for deleting Content
router.post("/delete",validateDeleteContentRequest,deleteContent,ContentController);

//Express Route for serving the Content sorted by timestamp
router.get("/serve/new",getAllContent,getUserInteractionDetails,serveNewContent,ContentController);

//Express Route for serving the Content sorted by user-interaction
router.get("/serve/popular",getAllContent,getUserInteractionDetails,servePopularContent,ContentController);

//Express Route for data ingestion via CSV
router.post("/data/ingest",processCSVData,ingestCSVData, ContentController);

module.exports=router;