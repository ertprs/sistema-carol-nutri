const mongoose = require('../../database')

require('../models/scheduling')
const Scheduling = mongoose.model('Scheduling')

module.exports = {
    // Função para criar um agendamento
    async store(req, res){
        try {
            // Armazena do banco de dados o horario para agendamento
            const schedule = await Scheduling.create({...req.body});

            return res.json(schedule);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao agendar data.'})

        }

    },
    // Função para listar todas os Agendamentos
    async index(req, res){
        try {

            const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const schedule = await Scheduling.paginate({ }, { page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(schedule)

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar agendamentos.'})

        }
    },
    // Função para listar todos os agendamenos para o dia em que esteja
    async show(req, res){
        try {
            // Procura todos os agendamentos no banco de dados para o dia atual
            const schedule = await Scheduling.find({virtualDate: req.params.id})
            // Caso nao exista nenhum agendamento para o dia atual
            if(schedule == [] || schedule ==undefined){
                return res.status(400).send({error: 'Nenhum agendamento para este dia.' })
            }

            return res.json(schedule);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao lista agendamento.' })

        }

    },
    // Função para listar os agendamentos do dia atual, pelo id.
    async showId(req, res){
        try {
            // Procura um agendamento no banco de dados pelo o id
            const schedule = await Scheduling.findById(req.params.id)
            // Se for vazio ou indefino
            if(schedule == [] || schedule ==undefined){
                return res.status(400).send({error: 'Nenhum agendamento para este dia.' })
            }

            return res.json(schedule);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar agendamento.' })

        }

    },
    // Função para atualizar os agendamentos
    async update(req, res){
        try {
            // Procura um agendamento pelo id e em seguida atualiza com o novo horario fornecido para agendamentos
            const schedule = await Scheduling.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(schedule);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar data de agendamento.' })
        }
    },
    // Função para deletar um agendamento
    async destroy(req, res){
        try {
            // Encontra um agendamento pelo id e em seguida remove do banco de dados
            await Scheduling.findByIdAndRemove(req.params.id);

            return res.send('Agendamento deletado!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar agendamento.' })

        }
    }
}