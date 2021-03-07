const  mongoose = require('mongoose');

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

mongoose.model('Profile', profileSchema);