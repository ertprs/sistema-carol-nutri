const mongoose = require('../database');

mongoose.connect('mongodb://localhost/carolNutricionista', {useMongoClient: true});
mongoose.Promise = global.Promise;