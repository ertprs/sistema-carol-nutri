const mongoose = require('../../database/index')
const mongoosePaginate = require('mongoose-paginate')

const RecordRecipes = mongoose.Schema({
    dateCreater: {
        type: Date,
        require: true,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
})

// Definido o pluglin para poder utilizar a função paginate
RecordRecipes.plugin(mongoosePaginate)
// O primeiro argumento é o nome singular da coleção para a qual o model se destina.
mongoose.model('RecordRecipes', RecordRecipes)