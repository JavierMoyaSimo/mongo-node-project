const express = require("express");
const contractsRouter = express.Router();


const {
    contractsGetAllController,
    contractsGetOneController,
    contractsCreateController,
    contractsDeleteController,
    contractsPutController,
    // contractsPatchController,
} = require("../controllers/contracts.controllers.js");


contractsRouter.get("/listcontracts", contractsGetAllController);
contractsRouter.get("/listcontracts/:id", contractsGetOneController);
contractsRouter.post("/addcontract", contractsCreateController);
contractsRouter.delete("/deletecontract/:id", contractsDeleteController);
contractsRouter.put("/modifycontract/:id", contractsPutController);
// contractsRouter.patch("/modifycontract/:id", contractsPatchController);





module.exports = contractsRouter;
