// Files required
require('dotenv/config');
require('./models/db');

// Modules required
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Routes file required
const routes = require('./routes.js');

// BodyParser to handle data of HTTP POST requests in Express.js
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set static folder for clientside
app.use(express.static(__dirname + '/static/public'));

// Defining ejs as view engine
app.set('view engine', 'ejs');

// Defining ejs as view engine
app.use("/", routes);

// Send 404 if page doesn't exist
app.use((req, res, next) => {
  res.status(404).send("Sorry, this page doesn't exist.")
})

// Setting portnumber to listen to
app.listen(9001);