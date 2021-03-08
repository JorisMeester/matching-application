// Modules required
const mongoose = require('mongoose');

// Profile model
const profileSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    sex: {
        type: String,
        required: 'This field is required.'
    },
    gender: {
        type: String,
        required: 'This field is required.'
    },
    birthday: {
        type: Date,
        required: 'This field is required.'
    },
    interest: {
        type: String,
        required: 'This field is required.'
    },
    religion: {
        type: String
    },
    place: {
        type: String,
        required: 'This field is required.'
    },
    hobbies: {
        type: Array
    },
});

// Email validation
profileSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.')

mongoose.model('Profile', profileSchema);