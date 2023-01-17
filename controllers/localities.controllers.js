const LocalidadModel = require("../models/locality.model");



//Locality by CP
const localitiesGetOneController = async (req, res) => {
    const cp = req.params.cp;
    const localityFound = await LocalidadModel.findOne({ codigo_postal: cp })
    if (localityFound) {
        res.json(localityFound);
    } else {
        res.status(204).json({ message: "Locality not found" });
    }
};

//listcontracts (LISTADO DE localitis)
const localitiesGetAllController = async (req, res) => {
    const queryParameters = req.query || {};
    const localities = await LocalidadModel.find(queryParameters);
    res.json(localities);

};

//add locality (CREAR NUEVA LOCALIDAD)
// const localitiesCreateController = async (req, res) => {
//     try {
//         const locality = req.body;
//         const localityCreated = new LocalidadModel(locality);
//         await localityCreated.save();
//         res.status(201).json(localityCreated);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };


module.exports = {
    localitiesGetOneController,
    localitiesGetAllController,
    // localitiesCreateController
};
