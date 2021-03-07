require('dotenv/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const slug = require('slug');
//const path = require('path');
const app = express();

const routes = require('./routes.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static/public'));
app.set('view engine', 'ejs');

app.post('/', add);

function add(req, res) {
  console.log(req.body);
  let searchQuery = slug(toString(req.body)).toLowerCase();

  res.redirect('/search?q=' + searchQuery)
}

//always at the bottom
app.use("/", routes);

app.use((req, res, next) => {
  res.status(404).send("Sorry, this page doesn't exist.")
})

app.listen(9001);