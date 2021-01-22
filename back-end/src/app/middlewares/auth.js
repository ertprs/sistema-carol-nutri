const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = (req, res, next) => {
    try {

        // contém as credenciais para autenticar um usuário com um servidor.
        const authHeader = req.headers.authorization

        // Verifica se existe alguma credencial 
        if(!authHeader)
            return res.status(401).send({error: 'Token inexistente!'})
        
        // Separa as credenciais por um espaco em branco e armazena em um vetor
        const parts = authHeader.split(' ')
        // Caso seja diferente de 2, retorna um erro de token
        if(!parts.length === 2)
            return res.status(401).send({error: 'Token error!'})
        
        // Faz uma desestruturacao na variavel parts
        const [ scheme, token ] = parts
        // verifica o scheme de autenticação 
        if(!/^Bearer$/i.test(scheme)){
            return res.status(401).send({ error: 'Token mal formado!'})
        }
        // verificar um token simétrico
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err) return res.status(401).send({ error: 'Token invalido!'})
            
            // Decodificando um id
            req.userId = decoded.params.id
            // Próxima função de middleware na pilha
            return next()
        })
    } catch (error) {
        return res.status(401).send({ error: 'Erro! Tente novamente!'})
    }

}