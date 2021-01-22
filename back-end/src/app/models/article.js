const mongoose = require('../../database/index')
const bcrypt = require('bcryptjs')
const mongoosePaginate = require('mongoose-paginate')

const RegistrationArticle = mongoose.Schema({
    dateCreater: {
        type: Date,
        require: true,
        default: Date.now
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
RegistrationArticle.plugin(mongoosePaginate)

// O primeiro argumento é o nome singular da coleção para a qual o model se destina.
mongoose.model('RegistrationArticle', RegistrationArticle)