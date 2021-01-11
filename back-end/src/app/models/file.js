const mongoose = require('../../database/index')
const mongoosePaginate = require('mongoose-paginate')

const FileSchema = mongoose.Schema({
    dateCreater: {
        type: Date,
        default: Date.now
    },
    avatar_ref:{
        type: mongoose.Schema.Types.ObjectId, //-- Salva o id do dono da atividade --//
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },

})


// Definido o pluglin para poder utilizar a função paginate
FileSchema.plugin(mongoosePaginate)

const File = mongoose.model('File', FileSchema)

module.exports = File