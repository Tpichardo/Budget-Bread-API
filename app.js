const express = require("express");
const cors = require("cors");
const transactionsController = require('./controllers/transactionsController')

const app = express();


//Middleware

// this allows any app/site from anywhere access your API. 
// This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());
app.use(express.json());
app.use('/transactions', transactionsController)

app.use((req, res, next) => {
    console.log("INCOMING REQUEST:", req.method, req.path)
    next()
})

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the budgeting app!");
});

app.get("*", (req, res) => {
    res.status(404).send("Sorry mate, page not found")
})



module.exports = app