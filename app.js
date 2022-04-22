const express = require("express");
const cors = require("cors");
const transactionsController = require('./controllers/transactionsController');

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log("INCOMING REQUEST:", req.method, req.path)
    next()
});

app.get("/", (req, res) => {
    res.send("Welcome to the budgeting app!");
});

app.use('/transactions', transactionsController);

app.get("*", (req, res) => {
    res.status(404).send("Sorry mate, page not found");
});



module.exports = app;