const routes = require('express').Router();
const mongoose = require('mongoose');

routes.get("/", (req, res) => {
    res.render('home', { data: { title: 'Matching application' } });
});

routes.get('/filter', (req, res) => {
    res.render('filter', {
        data: {
            title: 'Filters', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist', 'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish']
        }
    });
});

routes.get('/create', (req, res) => {
    res.render('create', {
        data: {
            title: 'Create profile', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist',
                'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'], sexes: ['Male', 'Female'], genders: ['Agender', 'Bigender', 'Cisgender', 'Transgender']
        }
    });
});

routes.post('/create', (req, res) => {
    insertData(req, res);
});

const Profile = mongoose.model('Profile');

function insertData(req, res){
    const profile = new Profile();
    profile.firstName = req.body.firstname;
    profile.sex = req.body.sex;

    profile.save((err, doc) => {
        if (!err){
            res.redirect('/')
        } else {
            console.log('Error during profile data insertion:' + err)
        }
    })
}

module.exports = routes;