const mongoose = require("mongoose");



//MongoDB connection
mongoose.connect(
    "mongodb://localhost:27017/myProject"
)
.then(()=> console.log("Connected to MongoDB"))
.catch((error)=> console.error(error))

module.exports = mongoose;