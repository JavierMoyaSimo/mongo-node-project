const express = require("express");
const contractsRouter = express.Router();


const {
    contractsGetAllController,
    contractsGetOneController,
    contractsCreateController,
    contractsDeleteController,
    contractsPutController,
    contractsPatchController,
} = require("../controllers/contracts.controllers.js");


contractsRouter.get("/", contractsGetAllController);
contractsRouter.get("/:id", contractsGetOneController);
contractsRouter.post("/", contractsCreateController);
contractsRouter.delete("/:id", contractsDeleteController);
contractsRouter.put("/:id", contractsPutController);
contractsRouter.patch("/:id", contractsPatchController);







module.exports = contractsRouter;
