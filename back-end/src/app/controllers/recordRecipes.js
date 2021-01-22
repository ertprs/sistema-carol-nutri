const mongoose = require('../../database')

require('../models/recordRecipes')
const RecordRecipes = mongoose.model('RecordRecipes')

module.exports = {
    // Função para criar uma receita
    async store(req, res){
        try {
            // Cria uma receita no banco de dados com os dados fornecidos no formulario
            const revenue = await RecordRecipes.create({...req.body});

            return res.json(revenue);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao cadastrar receita.'})

        }

    },
    // Funcao para listar todas as receitas
    async index(req, res){
        try {

            const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const revenue = await RecordRecipes.paginate({ }, { page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(revenue)

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar receitas.'})

        }
    },
    // Funcao para listar uma unica receita
    async show(req, res){
        try {
            // Encontra uma receita com o id passado como argumento, caso exista
            const revenue = await RecordRecipes.findById(req.params.id)

            return res.json(revenue);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar receita.' })

        }

    },
    // Procura uma receita pelo nome fornecido na url
    async showName(req, res){
        try {
            // Procura uma receita pelo nome fornecido na url
            const revenue = await RecordRecipes.find({title: req.params.id})
            // Caso nao exista uma receita com o parametro fornecido
            if(!revenue){
                return res.status(400).send({error: 'Não existe resultados para a busca com este parametro.' })
            }
            // Caso nao encontre nenhuma receita
            if(revenue.length == 0){
                return res.status(400).send({error: 'Receita não encontrado.' })
            }

            return res.json(revenue);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao listar receita.' })

        }

    },
    // Função para atualizar os dados da receita
    async update(req, res){
        try {
            // Encontra uma receita no model com o id fornecido e atualiza com os novos dados fornecidos no formulario
            const revenue = await RecordRecipes.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(revenue);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar receita.' })
        }
    },
    // Funcao para deletar uma receita
    async destroy(req, res){
        try {
            // Encontra uma receita no model com o id passado como argumento e em seguida deleta do model RecordRecipes
            await RecordRecipes.findByIdAndRemove(req.params.id);

            return res.send('Artigo deletado!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar artigo.' })

        }
    }
}