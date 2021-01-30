const mongoose = require('../../database');
const { update, destroy } = require('./usersController');

const functionEnergyExpend = require("./energyExpenditure")
require("../models/protocolService")
const ProtocolService = mongoose.model("ProtocolService");

module.exports = {
    // Função para criar um Protocolo de Servico
    async store(req, res) {
        try {
            // Armazena no banco de dados os dados fornecidos no formulario
            const protocolService = await ProtocolService.create({... req.body});

            return res.json(protocolService);
        }
        catch (error) {

            return res.status(400).send({error: 'Erro ao salvar formulário.'})
        }
    },
    // Função para listar todas os Protocolos de Servicos
    async index(req, res) {
        try {
            const { page = 1 } = req.query; // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const protocolService = await ProtocolService.paginate({}, { page, limit: 10 }) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(protocolService);
            
        }
        catch (error) {
            return res.status(400).send({error: 'Erro ao listar dados do atendimento.'})
        }
    },
    // Função para listar um unico Protocolo de Servico
    async show(req, res) {
        try {
            // Encontrar um Protocolo de Servico de id do usuario
            const protocolService = (await ProtocolService.findOne({user: req.params.id}))

            if(!protocolService){ // Verifica se existe algum Protocolo de Servico para o usuario
                return res.status(400).send({error: 'Este usuário não possui dados médicos.' })
            }

            if(protocolService == undefined){
                return res.status(400).send({error: 'Este usuário não possui dados médicos.'})
            }

            return res.json(protocolService);

        }

        catch (error) {

            return res.status(400).send({error: 'Erro ao listar dados do atendimento.'})
        }
    },
    // Função para atualizar os dados do Protocolo de Servico
    async update(req, res) {
        try {

            let body = req.body; // Armazena todos os dados do formulario em uma variavel
            // Faz uma desestruturação para pegar apenas as variaveis determinadas do corpo do formulario
            const { currentWeight, NAF, tricepsSkinfold, subscapularSkinfold, suprailiacSkinfold, thighSkinfold, abdominalSkinfold } = body.anthropometricEvaluation; 
            const { dateBirth, genre, height, Weight } = body.PersonalInformation;

            // Chama uma funcao para calcular a idade de acordo com a data de nascimento
            const age = functionEnergyExpend.calculaIdade(dateBirth)
            // Calcular a densidade corporal do paciente
            const dc =  functionEnergyExpend.densidadeCorporal(genre, tricepsSkinfold, suprailiacSkinfold, abdominalSkinfold, subscapularSkinfold, thighSkinfold)
            // Calcular o percentual de gordura
            const percentGordura = functionEnergyExpend.percentualDeGordura(dc)
            // Calcular o peso gordo
            const pesoGordo = functionEnergyExpend.pesoGordo(currentWeight, percentGordura)
            // Calcular o peso magro
            const pesoMagro = functionEnergyExpend.pesoMagro(currentWeight, pesoGordo)

            // Variavel que armazena o calculo do gasto energetico da formula de FAO/OMS
            const faoOms = functionEnergyExpend.faoOms(currentWeight, age, genre)
            // Variavel que armazena o calculo do gasto energetico  da formula de HarrysBenedict
            const HarrisBenedict = functionEnergyExpend.harrisBenedict(height, currentWeight, age, genre);
            // Variavel que armazena o calculo do gasto energético da formula de IOM
            const iom = functionEnergyExpend.iom(height, currentWeight, age, genre, NAF);
            // Variavel que armazena o calculo de necessidade hidrica
            const dailyHydraulicNeed = (0.035 * currentWeight).toFixed(2);

            // Atribuindo um novo valor para as variaveis do formulario
            body.anthropometricEvaluation.energyExpenditure.faoOms = faoOms
            body.anthropometricEvaluation.energyExpenditure.HarrisBenedict = HarrisBenedict
            body.anthropometricEvaluation.energyExpenditure.iom = iom
            body.anthropometricEvaluation.dailyHydraulicNeed = dailyHydraulicNeed
            body.anthropometricEvaluation.imc = (Weight / (height * height)).toFixed(2)
            body.anthropometricEvaluation.bodyDensity = dc
            body.anthropometricEvaluation.fatPercentage = percentGordura
            body.anthropometricEvaluation.fatWeight = pesoGordo
            body.anthropometricEvaluation.thinWeight = pesoMagro
            // Encontrando o usuario de acordo com o id e atualizanndo os dados para salvar no banco de dados
            const protocolService = await ProtocolService.findByIdAndUpdate(req.params.id, body, {new: true});
            
            return res.json(protocolService);
        }
        catch (error) {

            return res.status(400).send({error: 'Erro ao editar o formulário.'});
        }
    },
    // Função para deletar um Protocolo de Servico
    async destroy(req, res) {
        try {
            // Encontra o Protocolo de Servico com id fornecido e em seguida deleta
            await ProtocolService.findByIdAndRemove(req.params.id);
            return res.json({ message: "Formulário deletado"});
        }
        catch (error) {
            return res.status(400).send({error: 'Erro ao deletar.'});
        }
    }
}