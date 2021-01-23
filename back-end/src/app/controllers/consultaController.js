const mongoose = require('../../database')

require('../models/scheduling')
require('../models/consulta')
const Consulta = mongoose.model('Consulta')
const Scheduling = mongoose.model('Scheduling')

module.exports = {
    // Função para criar uma consulta
    async store(req, res){
        try {
            // Cria uma consulta com os dados fornecido
            const consulta = await Consulta.create({... req.body});

            return res.json(consulta); // Envia uma resposta JSON composta dos dados especificado.

        } catch (error) {

            return res.status(400).send({error: 'Erro ao criar consulta.'})

        }

    },
    // Função para listar todas as consultas
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
    // Função para listar uma unica consulta
    async showId(req, res){
        try {
            // Encontra uma consulta com o id passado como argumento, caso exista
            const consulta = await Consulta.findById(req.params.id)

            return res.json(consulta);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar consulta.' })

        }
    },

    // Função para listar uma unica consulta
    async show(req, res){
        try {
            // Encontra uma consulta com o id passado como argumento, caso exista
            let datas = await Scheduling.find({virtualDate: req.params.data})
            var consultas = []

            for(x = 0; x < datas.length; x++){
                let id = datas[x]._id

                let consulta = await Consulta.find({data: id}).populate('data').populate('user')
                
                if(!(consulta.length === 0)){
                    consultas.push(consulta[0])
                }             
            }

            return res.json(consultas);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao listar consulta.' })

        }
    },
    // Função para atualizar os dados da consulta
    async update(req, res){
        try {
            // Encontra uma consulta no model com id do usuario fornecido e atualiza com os novos dados fornecidos no formulario
            const consulta = await Consulta.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(consulta);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar consulta.' })
        }
    },
    // Função para deletar uma consulta
    async destroy(req, res){
        try {
            // Encontra uma consulta no model com o id passado como argumento e em seguida deletar do model Consulta
            await Consulta.findByIdAndRemove(req.params.id);

            return res.send('consulta removido!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar consulta.' })

        }
    }
}