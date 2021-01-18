const mongoose = require('../../database')

require('../models/recordRecipes')
const RecordRecipes = mongoose.model('RecordRecipes')

module.exports = {

    async store(req, res){
        try {
            const revenue = await RecordRecipes.create({...req.body});

            return res.json(revenue);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao cadastrar receita.'})

        }

    },

    async index(req, res){
        try {

            const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const revenue = await RecordRecipes.paginate({ }, { page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(revenue)

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar artigos.'})

        }
    },

    async show(req, res){
        try {

            const revenue = await RecordRecipes.findById(req.params.id)

            return res.json(revenue);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar artigo.' })

        }

    },

    async showName(req, res){
        try {

            const revenue = await RecordRecipes.find({title: req.params.id})

            if(!revenue){
                return res.status(400).send({error: 'Não existe resultados para a busca com este parametro.' })
            }

            if(revenue.length == 0){
                return res.status(400).send({error: 'Receita não encontrado.' })
            }

            return res.json(revenue);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao listar artigo.' })

        }

    },

    async update(req, res){
        try {

            const revenue = await RecordRecipes.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(revenue);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar artigo.' })
        }
    },

    async destroy(req, res){
        try {
            
            await RecordRecipes.findByIdAndRemove(req.params.id);

            return res.send('Artigo deletado!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar artigo.' })

        }
    }
}