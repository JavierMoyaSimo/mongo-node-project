const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});



app.listen(port, () => console.log(`Server listening on port ${port}!`));