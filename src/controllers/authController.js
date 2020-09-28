const { Router } = require('express')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authconfig = require('../config/auth.json')

const User = require('../models/user')

const router = express.Router()

function genareteToken(params = {}){
    return jwt.sign({params}, authconfig.secret, {
        expiresIn: 86400
    })
}

router.post('/register', async (req, res) => {
    try{
        const {email} = req.body

        if(await User.findOne({email}))
            return res.status(400).send({error: 'Este E-mail já existe.'})

        const user = await User.create(req.body)

        user.password = undefined

        return res.send({
            user,
            token: genareteToken({id: user.id})
        })
        
    }catch(err){

        return res.status(400).send({ error: 'Erro no registro.'})

    }
})

router.post('authenticate', async (req, res) => {
    const { email, password} = req.body

    const user = await  User.findOne({email}).select('+password')

    if(!user)
        return res.status(400).send({error: 'Usuário inexistente.'})

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Senha invalida!'})


        user.password = undefined

        return res.send({
            user,
            token: genareteToken({id: user.id})
        })
})