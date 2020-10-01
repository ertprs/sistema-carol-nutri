const authMiddleware = require('express')
const express = require('express')

const mongoose = require('../../database')

require('../models/user')
const User = mongoose.model('User')

const router = express.Router()

router.use(authMiddleware)

    router.get('/users', async (req, res) => {
        const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
        // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
        const users = await User.paginate({ page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
        return res.json(users)
    }),

    router.get('/user/:id', async (req, res) => {
        const User = await User.findById()

        return res.json(User);
    }),

    router.put('/update-user/:id', async (req, res) =>{
        const User = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(User);
    }),

    router.delete('/delete-user/:id', async (req, res) =>{
        await User.findByIdAndRemove(req.params.id);

        return res.send('User removido!');
    })

module.exports = app => app.use('/users', router)