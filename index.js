const express = require('express');
const bodyParser = require('body-parser');
const slug = require('slug');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const routes = require('./routes.js');

require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static/public'));
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname), 'views')

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


mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, client) => {
    if (!err) {
      console.log('MongoDB connection succesful')
    } else {
      console.log('MongoDB connection error:', err)
    }
    console.log(client)
  }
)


//always at the bottom
app.use("/", routes);

app.use((req, res, next) => {
  res.status(404).send("Sorry, this page doesn't exist.")
})

app.listen(9001);