const express = require("express");
// const mongoose = require("mongoose");



const app = express();

app.use(express.json());

const contractsRouter = require("./routers/contracts.router");
const localitiesRouter = require("./routers/localities.router");



//middleware
app.use('/contracts', contractsRouter);
app.use('/localities', localitiesRouter);


app.use((req, res) => res.status(404).json({ message: "Not found url -> " + req.url }));

module.exports = app