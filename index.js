const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/static/public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname), 'views')
app.get("/", (req, res) =>{
    res.render('filter', {data : {interests : ['Men', 'Women', 'Everyone'], religions : ['Atheist', 'Buddhist','Christian', 'Hinduist', 'Islamic', 'Jewish']}});
});
app.listen(9001);
