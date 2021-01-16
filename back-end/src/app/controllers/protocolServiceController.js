const mongoose = require('../../database');
const { update, destroy } = require('./usersController');

const functionEnergyExpend = require("./energyExpenditure")
require("../models/protocolService")
const ProtocolService = mongoose.model("ProtocolService");

module.exports = {

    async store(req, res) {
        try {

            const protocolService = await ProtocolService.create({... req.body});

            return res.json(protocolService);
        }
        catch (error) {
            console.log(error)
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

            const protocolService = (await ProtocolService.findOne({user: req.params.id}))

            if(!protocolService){
                return res.status(400).send({error: 'Este usuário não possui dados médicos.' })
            }

            if(protocolService == undefined){
                return res.status(400).send({error: 'Este usuário não possui dados médicos.'})
            }

            return res.json(protocolService);

        }

        catch (error) {
            console.log(error)
            return res.status(400).send({error: 'Erro ao listar dados do atendimento.'})
        }
    },

    async update(req, res) {
        try {

            let body = req.body;
         
            const { currentWeight, NAF } = body.anthropometricEvaluation;
            const { dateBirth, genre, height, Weight } = body.PersonalInformation;
            
            const age = functionEnergyExpend.calculaIdade(dateBirth)

            console.log(height +" "+ currentWeight +" Idade: "+ age +" "+ genre +" "+ dateBirth)

            const faoOms = functionEnergyExpend.faoOms(currentWeight, age, genre)
            const HarrisBenedict = functionEnergyExpend.harrisBenedict(height, currentWeight, age, genre);
            const iom = functionEnergyExpend.iom(height, currentWeight, age, genre, NAF);
            const dailyHydraulicNeed = (0.035 * currentWeight).toFixed(2);

            body.anthropometricEvaluation.energyExpenditure.faoOms = faoOms
            body.anthropometricEvaluation.energyExpenditure.HarrisBenedict = HarrisBenedict
            body.anthropometricEvaluation.energyExpenditure.iom = iom
            body.anthropometricEvaluation.dailyHydraulicNeed = dailyHydraulicNeed
            body.anthropometricEvaluation.imc = (Weight / (height * height)).toFixed(2)
            const protocolService = await ProtocolService.findByIdAndUpdate({_id: req.params.id}, body, {new: true});

            return res.json(protocolService);
        }
        catch (error) {
            console.log(error)
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