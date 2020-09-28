const { mongo } = require("mongoose");

const bcrypt = require('bcryptjs')

const mongoose = require(mongoose)

const UserSchema = mongose.Schema({
    dateCreater: {
        type: Date,
        require: true,
        default: Date.now
    },
    name: {
        type: String,
        require: true
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
})

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

const User = mongoose.model('User', UserSchema)