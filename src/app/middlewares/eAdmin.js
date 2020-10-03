const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const mongoose = require('../../database')

require('../models/user')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if(!authHeader)
            return res.status(401).send({error: 'Token inexistente!'})
    
        const parts = authHeader.split(' ')
    
        if(!parts.length === 2)
            return res.status(401).send({error: 'Token error!'})
    
        const [ scheme, token ] = parts
    
        if(!/^Bearer$/i.test(scheme)){
            return res.status(401).send({ error: 'Token mal formado!'})
        }
    
        jwt.verify(token, authConfig.secret, async (err, decoded) => {
            if(err) return res.status(401).send({ error: 'Token invalido!'})
    
            req.userId = decoded.params.id
    
            const user = await User.findById(decoded.params.id).select('+eAdmin')
    
            if(!user.eAdmin) return res.status(401).send({ error: 'Este usuário não é administrador!'})
    
            user.eAdmin = undefined
            return next()
        })
    } catch (error) {

        return res.status(400).send({ error: 'Erro! tente novamente.'})

    }

}