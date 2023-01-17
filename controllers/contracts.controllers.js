const ContratoModel = require("../models/contract.model.js");

//listcontracts (LISTADO DE CONTRATOS)
const contractsGetAllController = async (req, res) => {
    const queryParameters = req.query || {};
    const contracts = await ContratoModel.find(queryParameters);
    res.json(contracts);

};

//Contract by ID
const contractsGetOneController = async (req, res) => {
    const { id } = req.params;
    const contractFound = await ContratoModel.findOne({ id })
    if (contractFound) {
        res.json(contractFound);
    } else {
        res.status(204).json({ message: "Contract not found" });
    }
};

//add contract (CREAR NUEVO CONTRATO)
const contractsCreateController = async (req, res) => {
    try {
        const contract = req.body;
        const contractCreated = new ContratoModel(contract);
        await contractCreated.save();
        res.status(201).json(contractCreated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//delete contract (BORRAR CONTRATO)
const contractsDeleteController = async (req, res) => {
    const { id } = req.params;
    const contractFound = await ContratoModel({ id })
    if (contractFound) {
        await contractFound.remove();
        res.json({ message: "Contract deleted" });
    } else {
        res.status(204).json({ message: "Contract not found" });
    }
};

//modifycontract (MODIFICAR CONTRATO)reemplazo completo
const contractsPutController = async (req, res) => {
    const { id } = req.params;
    const contract = req.body;
    const contractFound = await ContratoModel({ id })
    if (contractFound) {
        contract._id = id;
        await contractFound.replaceOne(contract);
        res.json(contract);
    } else {
        res.status(204).json({ message: "Contract not found" });
    }
};


//modifycontract (MODIFICAR CONTRATO)modificaciones parciales
// const contractsPatchController = async (req, res) => {
//     const {id } = req.params;
//     const contract = req.body;
//     const contractFound = await ContratoModel({id})
//     if (contractFound) {
//         for (const key in contract) {
//             contractFound[key] = contract[key];
//         }
//         await contractFound.save();
//         res.json(contractFound);
//     } else {
//         res.status(204).json({ message: "Contract not found" });
//     }
// };

module.exports = {
    contractsGetAllController,
    contractsGetOneController,
    contractsCreateController,
    contractsDeleteController,
    contractsPutController,
    // contractsPatchController,
};
