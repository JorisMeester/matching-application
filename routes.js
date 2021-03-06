const routes = require('express').Router();

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
module.exports = routes;