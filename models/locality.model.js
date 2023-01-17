
const mongoose = require("../config/mongoose.config.js");




const localidadSchema = {
    codigo_postal: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 5
    },
    municipio_id: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 5,
        unique: true
    },
    municipio_nombre: {
        type: String,
        minLength: 2,
        maxLength: 50
    },

}

const LocalidadModel = mongoose.model("Localidades", localidadSchema);


module.exports = LocalidadModel;