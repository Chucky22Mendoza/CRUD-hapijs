import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/hapiDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));