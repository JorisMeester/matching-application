const express = require('express');
const bodyParser = require('body-parser');
const slug = require('slug');
//const mongoose = require('mongoose');
//const path = require('path');
const app = express();

require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static/public'));
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname), 'views')
app.get('/', (req, res) => {
  res.render('filter', { data: { title: 'Filters', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist', 'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'] } });
});

// mongoose.connect(
//   process.env.DB_CONNECTION_STRING,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   (err, client) => {
//     if (err) { console.log("error", err) }
//     console.log(client)
//   }
// );

app.post('/', add)

function add(req, res) {
  console.log(req.body)
  let searchQuery = slug(toString(req.body)).toLowerCase();
  // data.push({
  //   interest: req.body.interest,
  //   minAge: req.body.minAge,
  //   maxAge: req.body.maxAge,
  //   religion: req.body.religion,
  //   livingDistance: req.body.livingDistance,
  //   place: req.body.place,
  //   hobbies: req.body.hobbies
  // })

  res.redirect('/search?q=' + searchQuery)
}

const db = require("./db");
const dbName = "matchingApplication";
const collectionName = "users";

db.initialize(dbName, collectionName, function (dbCollection) {
  dbCollection.find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}, function (err) {
  throw (err);
});

//always at the bottom
app.use((req, res, next) => {
  res.status(404).send("Sorry, this page doesn't exist.")
})

app.listen(9001);