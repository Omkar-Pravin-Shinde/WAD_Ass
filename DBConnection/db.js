const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://omkarshinde1152:Omkar1152@cluster0.d0iwax7.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('Connection succesfully'))
.catch((err) => {console.error(err);  });


var studentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    add:{
        type:String
    }
});

const Student = mongoose.model('Student',studentSchema);
module.exports=Student;