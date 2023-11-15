require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const xss = require("xss-clean");
const helmet = require("helmet");
const bodyParser = require('body-parser')
const getEinvoice = require('./GSTapi')

//middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(xss());


app.get("/", (req, res) => {
    res.send("<h1>Hello Lamps Server is listening to you !</h1>");
});

app.post("/api/v1/generate-invoice", async (req, res) => {
    try {
        let result = await getEinvoice();
        res.json(result);
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


//serverlisten points
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await app.listen(port, () => {
            console.log("The server is listening")
        });
    } catch (e) {
        console.log(e);
    }
};

start();