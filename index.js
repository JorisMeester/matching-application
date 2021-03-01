const express = require('express');
const bodyParser = require('body-parser');
//const path = require('path');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/static/public'));
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname), 'views')
app.get("/", (req, res) => {
  res.render('filter', { data: { title: 'Filters', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist', 'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'] } });
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, this page doesn't exist.")
})

app.post('/', urlencodedParser, (req, res)=>{
  console.log(req.body);
})

// function add(req, res) {
//   console.log(req.body);
//   var id = slug(req.body.id).toLowerCase();

//   data.push({
//     id: id,
//     interest: req.body.interest,
//     minAge: req.body.min-age,
//     maxAge: req.body.max-age,
//     religion: req.body.religion,
//     livingDistance: req.body.living - distance,
//     place: req.body.place,
//     hobbies: req.body.hobbies
//   })

//   res.redirect('/' + id)
// }

app.listen(9001);