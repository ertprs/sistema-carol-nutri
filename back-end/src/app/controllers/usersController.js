const mongoose = require('../../database')
const bcrypt = require('bcryptjs')
require('../models/user')
const User = mongoose.model('User')

module.exports = {
    async index(req, res){
        try {

            const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const user = await User.paginate({ }, { page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(user)

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar usuários.'})

        }
    },

    async show(req, res){
        try {

            const user = await User.findById(req.params.id)

            if(!user){
                return res.status(400).send({error: 'Usuário não encontrado.' })
            }

            return res.json(user);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar usuário.' })

        }

    },

    async showName(req, res){
        try {
            const user = await User.find({name: req.params.id})

            if(user.length == 0){
                return res.status(400).send({error: 'Usuário não encontrado.' })
            }

            if(!user){
                return res.status(400).send({error: 'Usuário não encontrado.' })
            }

            return res.json(user);

        } catch (error) {

            return res.status(400).send({error: 'Ocorreu um erro ao listar usuário.' })

        }

    },

    async update(req, res){
        try {

            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(user);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao listar usuários.' })
        }
    },

    async destroy(req, res){
        try {
            
            await User.findByIdAndRemove(req.params.id);

            return res.send('user removido!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao listar usuários.' })

        }
    },

    async updatePassword(req, res) {
        try {
            const user = await User.findById({_id: req.params.id}).select('+password')
            const password = req.body.password;

            bcrypt.compare(password, user.password, (async(error, isMatch) => {
                if(isMatch) {
                    const hash = await bcrypt.hash(req.body.newPassword, 10)
                    const userUpdate = await User.findByIdAndUpdate({_id: req.params.id}, {password: hash}, {new: true});
                    return res.status(200).send(userUpdate)
                }
                else {
                    return res.status(400).send({error: 'Senha invalida!'})
                }
            }))
        }
        catch (error) {
            return res.status(400).send({error: 'Senha invalida!'})
        }
    }
}