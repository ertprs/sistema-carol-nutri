const mongoose = require('../../database/index')
const bcrypt = require('bcryptjs')
const mongoosePaginate = require('mongoose-paginate')

const UserSchema = mongoose.Schema({
    dateCreater: {
        type: Date,
        require: true,
        default: Date.now
    },
    name: {
        type: String,
        require: true
    },
    PersonalInformation: {
        dateBirth: {
            type: String,
            require: true
        },
        maritalStatus: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        IntestinalTransit:{
            type: String,
            require: true
        },
        sleepQuality: {
            type: String,
            require: true,
            select: false
        },
        Weight: {
            type: String,
            require: true,
            select: false
        },
        height: {
            type: String,
            require: true,
            select: false
        },
        UrinaryStaining:{
            type: String,
            require: true,
            select: false
        },
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowecase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },

    passwordResetTxpires: {
        type: Date,
        default: Date.now,
    },
    eAdmin: {
        type: Boolean,
        default: false,
        require: true,
        select: false
    }
})

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})
// Definido o pluglin para poder utilizar a função paginate
UserSchema.plugin(mongoosePaginate)

mongoose.model('User', UserSchema)