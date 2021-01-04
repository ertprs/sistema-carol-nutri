const mongoose = require('../../database')
require('../models/article')
const RegistrationArticle = mongoose.model('RegistrationArticle')

module.exports = {

    async store(req, res){
        try {
            const article = await RegistrationArticle.create({...req.body});

            return res.json(article);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao cadastrar artigo.'})

        }

    },

    async index(req, res){
        try {

            const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const article = await RegistrationArticle.paginate({ }, { page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(article)

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar artigos.'})

        }
    },

    async show(req, res){
        try {

            const article = await RegistrationArticle.findById(req.params.id)

            return res.json(article);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar artigo.' })

        }

    },

    async showName(req, res){
        try {

            if(!req.params.id){
                return res.status(400).send({error: 'A pesquisa deve possoir paramentro para a busca.' })
            }

            const article = await RegistrationArticle.find({title: req.params.id})

            if(!article){
                return res.status(400).send({error: 'Não existe resultados para a busca com este parametro.' })
            }

            if(article.length == 0){
                return res.status(400).send({error: 'Artigo não encontrado.' })
            }

            return res.json(article);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar artigo.' })

        }

    },

    async update(req, res){
        try {

            const article = await RegistrationArticle.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(article);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar artigo.' })
        }
    },

    async destroy(req, res){
        try {
            
            await RegistrationArticle.findByIdAndRemove(req.params.id);

            return res.send('Artigo deletado!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar artigo.' })

        }
    }
}