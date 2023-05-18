const mongoose = require('mongoose') ;

mongoose.connect("Mongodb+srv://omkarshinde:Omkar1152@cluster0.yqts9.mongodb.net/", (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;