const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, client) => {
        if (!err) {
            console.log('MongoDB connection succesful')
        } else {
            console.log('MongoDB connection error:', err)
        }
        console.log(client)
    }
);

require('./profile.model');