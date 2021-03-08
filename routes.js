// Modules required
const routes = require('express').Router();
//const { response } = require('express');
//const { update } = require('lodash');
const mongoose = require('mongoose');

// Assigns Profile model object to Profile
const Profile = mongoose.model('Profile');

// Route for Home page
routes.get('/home/:id', (req, res) => {
    Profile.find(async(error, docs) => {
        if (!error) {
            const doc = await getProfile(req, res);
            res.render('home', {
                data: { title: 'Matching application' },
                list: docs,
                profile: doc
            });
        } else {
            console.log('Error in retrieving profile data: ' + error)
        }
    })
});

// Route for Login page
routes.get(['/', '/login'], (req, res) => {
    Profile.find((error, docs) => {
        if (!error) {
            res.render('login', { data: { title: 'Login' }, list: docs });
        } else {
            console.log('Error in retrieving profile data: ' + error)
        }
    });
});

// Route for Profile settings page
routes.get(['/profile-settings/:id'], async (req, res) => {
    const doc = await getProfile(req, res);
    res.render('profile-settings', {
        data: { title: 'Profile settings' },
        profile: doc
    });
});

// Route for Filter page
routes.get('/filter/:id', async (req, res) => {
    const doc = await getProfile(req, res);
            res.render('filter', {
                data: { title: 'Filters', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist', 'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'] },
                profile: doc
            });
});

// Route for Create page
routes.get('/create', (req, res) => {
    res.render('create', {
        data: { title: 'Create profile', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist', 'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'], sexes: ['Male', 'Female'], genders: ['Agender', 'Bigender', 'Cisgender', 'Transgender']
        }
    });
});

// Handles POST request for Create page with insertData function
routes.post('/create', (req, res) => {
    insertData(req, res);
});

// Route for Edit page
routes.get('/edit/:id', async (req, res) => {
    const doc = await getProfile(req, res);
    res.render('edit', {
        data: {
            title: 'Edit profile', interests: ['Men', 'Women', 'Everyone'], religions: ['Atheist',
                'Buddhist', 'Christian', 'Hinduist', 'Islamic', 'Jewish'], sexes: ['Male', 'Female'], genders: ['Agender', 'Bigender', 'Cisgender', 'Transgender']
        },
        profile: doc
    })
});

// Handles POST request for Edit page with updateData function
routes.post('/edit', (req, res) => {
    if (req.body._id) {
        updateData(req, res);
    } else {
        console.log('Error: No or invalid profile id given. Profile id: ' + req.body._id)
    }
});

// Deletes profile and redirects to '/'
routes.get('/delete/:id', (req, res) => {
    Profile.findByIdAndRemove(req.params.id, (error, doc) => {
        if (!error) {
            res.redirect('/');
        } else {
            console.log('Error when deleting profile item: ' + error)
        }
    });
});


routes.post('/search/:id', (req, res) => {
    console.log('test')
    const filters = req.body;
    Profile.create(filters, async (error, docs) => {
        if (!error) {
            const doc = await getProfile(req, res);
                    res.render('home', {
                        data: { title: 'Matching application' },
                        list: docs,
                        profile: doc
                    });
        } else {
            console.log('Error: Filter failed' + error)
        }
    })
    //     Profile.find((error, docs) => {
    //         if (req.query.religion != 'undefined') {
    //         const list = docs;
    //         response = list.filter((item) => {
    //             if (item.religion === 'Christian') {
    //                 Profile.findById(req.params.id, (error, doc) => {
    //                     if (!error) {
    //                         res.render('search', {
    //                             data: { title: 'Results' },
    //                             list: item,
    //                             profile: doc
    //                         });
    //                     } else {
    //                         console.log('Error in retrieving profile item: ' + error)
    //                     }
    //                 });
    //             }
    //         });
    //         } else {
    //         Profile.findById(req.params.id, (error, doc) => {
    //             if (!error) {
    //                 res.render('search', {
    //                     data: { title: 'Results' },
    //                     list: docs,
    //                     profile: doc
    //                 });
    //             } else {
    //                 console.log('Error in retrieving profile item: ' + error)
    //             }
    //         });
    //     }
    // });
});

// Inserts HTTP POST data into Profile object and saves it in the database
function insertData(req, res) {
    const profile = new Profile();
    profile.firstname = req.body.firstname;
    profile.email = req.body.email;
    profile.sex = req.body.sex;
    profile.gender = req.body.gender;
    profile.birthday = req.body.birthday;
    profile.interest = req.body.interest;
    profile.religion = req.body.religion;
    profile.place = req.body.place;
    profile.hobbies = req.body.hobbies;

    profile.save((error, doc) => {
        if (!error) {
            res.redirect('/login');
        } else {
            console.log('Error during profile data insertion: ' + error)
        }
    });
}

// Inserts HTTP POST data into the Profile with the same id and updates it in the database
function updateData(req, res) {
    Profile.findByIdAndUpdate(req.body._id, req.body, (error, result) => {
        if (!error) {
            console.log(req.body)
            res.redirect('/');
        } else {
            console.log('Error during profile data update: ' + error)
        }
    });
}

// Gets the data of the current profile
async function getProfile(req, res) {
    return await Profile.findById(req.params.id);
}

// Exports the routes object
module.exports = routes;