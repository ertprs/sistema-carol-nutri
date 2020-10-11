const mongoose = require('../../database');
const { update, destroy } = require('./usersController');

require("../models/protocolService")
const ProtocolService = mongoose.model("ProtocolService");

module.exports = {

    async store(req, res) {
        try {
            const protocolService = await ProtocolService.create({... req.body, user:req.userId});
            return res.json(protocolService);
        }
        catch (error) {
            return res.status(400).send({error: 'Erro ao salvar formulário.'})
        }
    },

    async index(req, res) {
        try {
            const { page = 1 } = req.query;

            const protocolService = await ProtocolService.paginate({}, { page, limit: 10 })
            return res.json(protocolService);
            
        }
        catch (error) {
            return res.status(400).send({error: 'Erro ao listar dados do atendimento.'})
        }
    },

    async show(req, res) {
        try {

            const protocolService = await ProtocolService.findById(req.params.id)
            return res.json(protocolService);

        }
        catch (error) {
            return res.status(400).send({error: 'Erro ao listar dados do atendimento.'})
        }
    },

    async update(req, res) {
        try {
            const protocolService = await ProtocolService.findByIdAndUpdate(req.params.id, req.body, { new: true });

            return res.json(protocolService);
        }
        catch (error) {
            return res.status(400).send({error: 'Erro ao editar o formulário.'});
        }
    },

    async destroy(req, res) {
        try {
            await ProtocolService.findByIdAndRemove(req.params.id);
            return res.json({ message: "Formulário deletado"});
        }
        catch (error) {
            return res.status(400).send({error: 'Erro ao deletar.'});
        }
    }
}