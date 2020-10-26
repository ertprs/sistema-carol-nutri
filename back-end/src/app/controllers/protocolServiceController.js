const mongoose = require('../../database');
const { update, destroy } = require('./usersController');

require("../models/protocolService")
const ProtocolService = mongoose.model("ProtocolService");


// function HarrisBenedict(A, P, I, G) {
//     var eg = 0;
//     if(G == "Feminino") {
//         eg = 655 + (9.6 * P) + (1.9 * A) - (4.7 * I);
//     }
//     else {
//         eg = 66 + (13.8 * P) + (5.0 * A) - (6.8 * I);
//     }
//     return eg;
// }

module.exports = {

    async store(req, res) {
        try {
            // const { anthropometricEvaluation: {height, currentWeight}} = req.body;
            // const { personalData: { age, genre } } = req.body;
            
            // const ener = HarrisBenedict(height, currentWeight, age, genre);

            // console.log(ener);

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