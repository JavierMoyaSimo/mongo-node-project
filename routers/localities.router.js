const express = require("express");
const localitiesRouter = express.Router();


const {

    localitiesGetOneController,
    localitiesGetAllController,
    // localitiesCreateController

} = require("../controllers/localities.controllers.js");


localitiesRouter.get("/getlocalidad/", localitiesGetAllController);
localitiesRouter.get("/getlocalidad/:cp", localitiesGetOneController);
// localitiesRouter.post("/addlocality", localitiesCreateController);





module.exports = localitiesRouter;
