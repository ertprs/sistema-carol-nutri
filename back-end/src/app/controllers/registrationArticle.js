const mongoose = require('../../database')
require('../models/article')
const RegistrationArticle = mongoose.model('RegistrationArticle')

module.exports = {
    // Funcao para registrar um atigo
    async store(req, res){
        try {
            // Registra os dados fornecidos no formulario no banco de dados
            const article = await RegistrationArticle.create({...req.body});

            return res.json(article);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao cadastrar artigo.'})

        }
    },
    // Funcao para listar todos os artigos
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
    // Funcao para listar um artigo pelo id
    async show(req, res){
        try {
            // Procura um artigo no banco de dados pelo id fornecido na url
            const article = await RegistrationArticle.findById(req.params.id)

            return res.json(article);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar artigo.' })

        }
    },
    // Procura artigos pelo nome fornecido na url
    async showName(req, res){
        try {
            // Retorna caso nao contenha parametro na url para pesquisar o artigo
            if(!req.params.id){
                return res.status(400).send({error: 'A pesquisa deve possuir parâmetro para a busca.' })
            }
            // Procura artigos pelo nome fornecido na url
            const article = await RegistrationArticle.find({title: req.params.id})

            // Caso nao exista um artigo com o parametro fornecido
            if(!article){
                return res.status(400).send({error: 'Não existe resultados para a busca com este parametro.' })
            }
            // Caso nao encontre nenhum artigo
            if(article.length == 0){
                return res.status(400).send({error: 'Artigo não encontrado.' })
            }

            return res.json(article);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar artigo.' })

        }

    },
    // Funcao para atualizar os dados dos artigos
    async update(req, res){
        try {
            // Encontra um artigo no model pelo o id fornecido e atualiza com os novos dados fornecidos no formulario
            const article = await RegistrationArticle.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(article);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar artigo.' })
        }
    },
    // Funcao para deletar um artigo
    async destroy(req, res){
        try {
            // Encontra um artigo no model com o id passado como argumento e em seguida deleta o artigo encontrado
            await RegistrationArticle.findByIdAndRemove(req.params.id);

            return res.send('Artigo deletado!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar artigo.' })

        }
    }
}