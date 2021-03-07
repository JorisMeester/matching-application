const routes = require('express').Router();
const { update } = require('lodash');
const mongoose = require('mongoose');

const Profile = mongoose.model('Profile');

routes.get("/", (req, res) => {
    Profile.find((err, docs) => {
        if (!err) {
            res.render('home', { data: { title: 'Matching application' }, list: docs });
        } else {
            console.log('Error in retrieving profile data: ' + err)
        }
    })
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

routes.get('/edit/:id', (req, res) => {
    Profile.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('edit', {
                data: {
                    title: 'Edit profile', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist',
                        'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'], sexes: ['Male', 'Female'], genders: ['Agender', 'Bigender', 'Cisgender', 'Transgender']
                },
                profile: doc
            })
        } else {
            console.log('Error in retrieving profile item: ' + err)
        }
    });
});

routes.post('/edit', (req, res) => {
    if (req.body._id) {
        updateData(req, res);
    } else {
        console.log('Error: No or invalid profile id given')
    }
});

routes.get('/delete/:id', (req, res) => {
    Profile.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/');
        } else {
            console.log('Error when deleting profile item: ' + err)
        }
    });
});

routes.post('/edit', (req, res) => {
    if (req.body._id) {
        updateData(req, res);
    } else {
        console.log('Error: No or invalid profile id given')
    }
});

function insertData(req, res) {
    const profile = new Profile();
    profile.firstname = req.body.firstname;
    profile.sex = req.body.sex;

    profile.save((err, doc) => {
        if (!err) {
            res.redirect('/')
        } else {
            console.log('Error during profile data insertion: ' + err)
        }
    });
}

function updateData(req, res) {
    Profile.findByIdAndUpdate(req.body._id , req.body, (err, result) => {
        if (!err) {
            console.log(req.body)
            res.redirect('/');
        } else {
            console.log('Error during profile data update: ' + err)
        }
    });
}

module.exports = routes;