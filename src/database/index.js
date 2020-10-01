const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carolNutricionista',  {

    useNewUrlParser: true,

    useUnifiedTopology: true,

    useCreateIndex: true,

    useFindAndModify: false

})
mongoose.Promise = global.Promise;

module.exports = mongoose