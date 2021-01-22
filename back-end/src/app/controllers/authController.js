const { Router } = require('express')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')

const ExpressBrute = require("express-brute");
const MongooseStore = require("express-brute-mongoose")
const BruteForceSchema = require("express-brute-mongoose/dist/schema");

const mongoose = require('../../database')
const authconfig = require('../../config/auth')
const { use } = require('../../modules/mailer')

require('../models/user')
const User = mongoose.model('User')

// Middlewares de nível de roteador
const router = express.Router()

const model = mongoose.model(
    "bruteforce",
    new mongoose.Schema(BruteForceSchema)
);
// Criando um model padrão do BruteForceSchema no mongoose
const store = new MongooseStore(model);

// Um middleware de proteção de força bruta para rotas express que limita a taxa de solicitações de entrada, aumentando o atraso com cada solicitação em uma sequência semelhante a fibonacci.
const bruteForce = new ExpressBrute(store);

// Retorna o JsonWebToken como string
function genareteToken(params = {}){
    try {
        return jwt.sign({params}, authconfig.secret, {
            expiresIn: 86400
        })
    } catch (error) {
        return res.status(400).send({error: 'Erro!.Tente novamente!'})
    }

}

// Rota para registrar um usuario
router.post('/register', async (req, res) => {
    try{
        const {email} = req.body // Pegar o email do usuario no corpo do formulario 

        if(await User.findOne({email})) // Verificar se existe um usuario com o email fornecido
            return res.status(400).send({error: 'Este E-mail já existe.'})

        const user = await User.create(req.body) // Criar o usuario com os dados fornecidos no formulario

        user.password = undefined 
        
        // Retorna os dados do usuario e o token criado
        return res.send({
            user,
            token: genareteToken({id: user._id})
        })
        
    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Erro no registro.'})

    }
})

// Rota para autenticacao do usuario
// bruteForce.prevent limita a taxa de solicitações de entrada
router.post('/authenticate', bruteForce.prevent, async (req, res) => {
    const { email, password} = req.body // Pega email e password do formulario fornecido pelo o usuario

    const user = await  User.findOne({email}).select('+password') // Procura um usuario com o email fornecido

    if(!user) // Verifica se o usuario existe
        return res.status(400).send({error: 'Usuário inexistente.'})

    if(!await bcrypt.compare(password, user.password)) // Verifica se as senhas são compativeis uma com a outra
        return res.status(400).send({error: 'Senha invalida!'})

        user.password = undefined

        return res.send({
            user,
            token: genareteToken({id: user._id})
        })
})

// Rota para recuperar a senha
router.post('/forgot_password', async (req, res) => {
    try{
        const { email } = req.body

        const user = await  User.findOne({email})

        if(!user)
            return res.status(400).send({error: 'Usuário inexistente.'})

            // Gera dados pseudoaleatórios criptograficamente fortes. 
        const token = crypto.randomBytes(20).toString('hex')
        const now = new Date() // Pega a data atual
        now.setHours(now.getHours() + 1)

        // Setar o token criado aleatoriamente e o tempo para expirar o token (1hora)
        await User.findByIdAndUpdate(user._id, {
            '$set': {
                passwordResetToken: token,
                passwordResetTxpires: now
            }
        })
        // Enviar um email para o usuario recuperar a senha
        mailer.sendMail({
            to: 'juniorteixeira1805@gmail.com',
            from: 'devorion01@gmail.com',
            subject: 'Recuperação de senha',
            text: 'Token: ' + token,
            html: ''
        }), (err) => {
            if(err)
                return res.status(400).send({error: 'Erro ao enviar email!' })
        }

        return res.send()

    }catch(err){
        return res.status(400).send({error: 'Erro on forgot password, try again!' })
    }


})

// Rota para redefinir a senha
router.post('/reset_password', async (req, res) => {

    try{
        const { email, token, password} = req.body

        const user = await User.findOne({email}).select('+passwordResetToken passwordResetTxpires')

        if(!user)
            return res.status(400).send({error: 'Usuário inexistente.'})
        
        // Verifica se os tokens do formulario e do model User são iguais
        if(token !== user.passwordResetToken)
            return res.status(400).send({error: 'Token invalido!'})

        const now = new Date() // Armazena a data atual em uma variavel

        if(now > user.passwordResetTxpires) // Verifica se o token não expirou o tempo
            return res.status(400).send({error: 'Token expirado!'})
    
        user.password = password // Armazena a senha no model User
        await user.save(); // Salva as alterações feitas no model

        res.send()

    }catch(err){
        console.log(err)
        return res.status(400).send({error: 'Erro on reset password, try again!' })
    }


})
module.exports = router; // Exporta o router para ser usado na aplicação principal