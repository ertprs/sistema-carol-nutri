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

mongoose.model('RegistrationArticle', RegistrationArticle)