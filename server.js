// Setup empty JS object
const projectData = {};

// Require Express
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
const { json } = require("body-parser");
app.use(cors());

// main project folder
app.use(express.static('website'));

// Setup Server
const port = 5000;

const server = app.listen(port, () => {
    console.log(`runnning on local host: ${port}`);
  });