const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://devorion01:as123@cluster0-czhpf.mongodb.net/carol-nutricionista?retryWrites=true&w=majority",  {

    useNewUrlParser: true,

    useUnifiedTopology: true,

    useCreateIndex: true,

    useFindAndModify: false

})
mongoose.Promise = global.Promise;

module.exports = mongoose