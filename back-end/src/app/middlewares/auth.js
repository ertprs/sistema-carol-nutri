const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

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
    
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err) return res.status(401).send({ error: 'Token invalido!'})
    
            req.userId = decoded.params.id
            return next()
        })
    } catch (error) {
        return res.status(401).send({ error: 'Erro! Tente novamente!'})
    }

}