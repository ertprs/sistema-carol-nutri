const mongoose = require('../../database')

require('../models/scheduling')
const Scheduling = mongoose.model('Scheduling')

module.exports = {

    async store(req, res){
        try {
            const schedule = await Scheduling.create({...req.body});

            return res.json(schedule);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao agendar data.'})

        }

    },

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

    async show(req, res){
        try {
            const schedule = await Scheduling.find({virtualDate: req.params.id})

            if(schedule == [] || schedule ==undefined){
                return res.status(400).send({error: 'Nenhum agendamento para este dia.' })
            }

            return res.json(schedule);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao lista agendamento.' })

        }

    },

    async update(req, res){
        try {

            const schedule = await Scheduling.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(schedule);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao editar data de agendamento.' })
        }
    },

    async destroy(req, res){
        try {

            console.log(req.params.id)
            
            await Scheduling.findByIdAndRemove(req.params);

            return res.send('Agendamento deletado!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao deletar agendamento.' })

        }
    }
}