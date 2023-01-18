const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
//SALTARSE POLITICA CORS DE GOOGLE CHROME PARA PRUEBAS LOCALES CON EL FRONTED
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE,OPTIONS"
    );
    next();
});





app.use(express.json());

const contractsRouter = require("./routers/contracts.router");
const localitiesRouter = require("./routers/localities.router");



//middleware
app.use('/contracts', contractsRouter);
app.use('/localities', localitiesRouter);


app.use((req, res) => res.status(404).json({ message: "Not found url -> " + req.url }));

module.exports = app