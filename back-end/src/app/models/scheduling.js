const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Scheduling = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    virtualDate:{
        type: String,
        required: true
    },
    hours:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    note: {
        type: String,
        default: 'Nada consta.'
    }
})

// Definido o pluglin para poder utilizar a função paginate
Scheduling.plugin(mongoosePaginate)
// O primeiro argumento é o nome singular da coleção para a qual o model se destina.
mongoose.model('Scheduling', Scheduling)