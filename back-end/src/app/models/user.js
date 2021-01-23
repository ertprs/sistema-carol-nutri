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
    phone: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowecase: true
    },
    avatar:{
        type: String,
        default: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
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
    }
})

// Funcao pre é chamada antes dos dados do usuario ser salvo no banco de dados
UserSchema.pre('save', async function(next){
    // Cria uma hash da senha
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    // Seta a variavel avatar com uma imagem padrao ao criar um usuario
    if(this.avatar == ""){
        this.avatar = "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
    }
})
// Definido o pluglin para poder utilizar a função paginate
UserSchema.plugin(mongoosePaginate)
// O primeiro argumento é o nome singular da coleção para a qual o model se destina.
const User = mongoose.model('User', UserSchema)

module.exports = User