const  mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    sex: {
        type: String
    },
    test: {
        type: String
    }
});

mongoose.model('Profile', profileSchema);