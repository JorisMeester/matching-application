// Modules required
const mongoose = require('mongoose');

// Make database connection
mongoose.connect(
    //Database connection string is put together with parts of the .env file
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, client) => {
        if (!err) {
            console.log('MongoDB connection succesful')
        } else {
            console.log('MongoDB connection error:', err)
        }
    }
);

// Models required
require('./profile.model');