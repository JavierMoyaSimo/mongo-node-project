
const mongoose = require("../config/mongoose.config.js");





const contratoSchema = {
    nombre: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 25
    },
    apellido1: {
        type: String,
        minLength: 2,
        maxLength: 25
    },
    apellido2: {
        type: String,
        minLength: 2,
        maxLength: 25
    },
    documento: {
        type: String,
        required: true,       

    },
    cp: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 5
    },
    localidad: {
        type: String,
        minLength: 3
    },
    direccion: {
        type: String,
        minLength: 2,
    },
    telefono: {
        type: String,
        required: true,
        minLength: 9,
        maxLength: 9,

    },
}

const ContratoModel = mongoose.model("Contratos", contratoSchema);


module.exports = ContratoModel;