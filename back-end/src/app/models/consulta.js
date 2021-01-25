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
    data: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scheduling',
        require: true,
    },
    situation: {
        type: String,
        require: true,
        default: 'Em espera'
    },
    note: {
        type: String,
        default: 'Nada consta.'
    },
    project: {
        type: String,
    },
    evaluation: {
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
        depoiment: {
            type: String,
        },
    }
})

// Definido o pluglin para poder utilizar a função paginate
ConsultaSchema.plugin(mongoosePaginate)
// O primeiro argumento é o nome singular da coleção para a qual o model se destina.
mongoose.model('Consulta', ConsultaSchema)