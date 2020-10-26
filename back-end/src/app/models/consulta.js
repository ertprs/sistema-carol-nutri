const mongoose = require('../../database/index')
const bcrypt = require('bcryptjs')
const mongoosePaginate = require('mongoose-paginate')

const ConsultaSchema = mongoose.Schema({
    dateCreater: {
        type: Date,
        require: true,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    solicitation: {
        type: Boolean,
        require: true,
        default: false
    },
    situation: {
        type: String,
        require: true,
        default: 'Em espera'
    },
    return:{
        type: Boolean,
        require: true,
        default: false
    },
    project: {
        type: String,
    },
    evaluation: {
        like: {
            type: String,
        },
        comment: {
            type: String,
        },
        result: {
            type: String,
        },
    },
    testimony: {
        like: {
            type: String,
        },
        comment: {
            type: String,
        },
        result: {
            type: String,
        },
    }
})

// Definido o pluglin para poder utilizar a função paginate
ConsultaSchema.plugin(mongoosePaginate)

mongoose.model('Consulta', ConsultaSchema)