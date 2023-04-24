const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3001;
const HOST = '0.0.0.0';

app.use(cors());

app.use(express.json());

// DB connection
const conn = require("./db/conn");

conn();

//Routes
const routes = require("./routes/router")

app.use('/api', routes)

app.listen(PORT, HOST, function(){
    console.log("Servidor Online")
})