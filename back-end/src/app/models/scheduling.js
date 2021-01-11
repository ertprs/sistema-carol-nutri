const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Scheduling = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    virtualDate:{
        type: Date,
        required: true
    },
    hours:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    note: {
        type: String,
        default: 'Nada consta.'
    }
})


Scheduling.plugin(mongoosePaginate)

mongoose.model('Scheduling', Scheduling)