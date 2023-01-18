const app = require('./app')
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



const port = process.env.PORT || 3002;

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});



app.listen(port, () => console.log(`Server listening on port ${port}!`));