const  mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'This field is required.'
    },
    sex: {
        type: String,
        required: 'This field is required.'
    }
});

mongoose.model('Profile', profileSchema);