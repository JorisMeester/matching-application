const express = require('express');
const bodyParser = require('body-parser');
const slug = require('slug');
const mongoose = require('mongoose');
//const path = require('path');
const app = express();

require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static/public'));
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname), 'views')
app.get('/filter', (req, res) => {
  res.render('filter', { data: { title: 'Filters', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist', 'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'] } });
});

app.get('/create', (req, res) => {
  res.render('create', { data: { title: 'Create profile', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist', 'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'], sexes: ['Male', 'Female'], genders: ['Agender', 'Bigender', 'Cisgender', 'Transgender']} });
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

//always at the bottom
app.use((req, res, next) => {
  res.status(404).send("Sorry, this page doesn't exist.")
})

app.listen(9001);