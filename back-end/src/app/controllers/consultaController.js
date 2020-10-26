const mongoose = require('../../database')

require('../models/consulta')
const Consulta = mongoose.model('Consulta')

module.exports = {

    async store(req, res){
        try {
            const consulta = await Consulta.create({... req.body, user: req.userId});

            return res.json(consulta);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao criar consulta.'})

        }

    },

    async index(req, res){
        try {

            const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const consulta = await Consulta.paginate({ }, { page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(consulta)

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar consultas.'})

        }
    },

    async show(req, res){
        try {

            const consulta = await Consulta.findById(req.params.id)

            return res.json(consulta);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar consulta.' })

        }

    },

    async update(req, res){
        try {

            const consulta = await Consulta.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(consulta);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar consulta.' })
        }
    },

    async destroy(req, res){
        try {
            
            await Consulta.findByIdAndRemove(req.params.id);

            return res.send('consulta removido!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar consulta.' })

        }
    }
}