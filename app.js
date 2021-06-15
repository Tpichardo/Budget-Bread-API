const express = require("express");
const cors = require("cors");

const app = express();


//Middleware
app.use(express.json()); // returns middleware that only parses JSON

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the budgeting app!");
});

module.exports = app