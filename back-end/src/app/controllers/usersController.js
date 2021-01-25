const mongoose = require('../../database')
const bcrypt = require('bcryptjs')
require('../models/user')
const User = mongoose.model('User')

module.exports = {
    // Função para listar todas os usuarios
    async index(req, res){
        try {

            const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const user = await User.paginate({ }, { page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.json(user)

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar usuários.'})

        }
    },
    // Função para listar um unico usuario
    async show(req, res){
        try {
            // Procura um usuario no banco de dados com id fornecido 
            const user = await User.findById(req.params.id)

            // Caso o usuario nao exista, retorna Usuario nao encontrado
            if(!user){
                return res.status(400).send({error: 'Usuário não encontrado.' })
            }
            // Se existe, entao retorna todos os dados do usuario
            return res.json(user);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar usuário.' })

        }

    },

    async showEmail(req, res){
        try {

            // Procura um usuario no banco de dados com id fornecido 
            const user = await User.findOne({email: req.params.email})

            // Caso o usuario nao exista, retorna Usuario nao encontrado
            if(!user){
                return res.status(400).send({error: 'Usuário não encontrado.' })
            }
            // Se existe, entao retorna todos os dados do usuario
            return res.json(user);

        } catch (error) {

            return res.status(400).send({error: 'Erro ao listar usuário.' })

        }

    },

    // Funcao para encontrar um usuario pelo nome
    async showName(req, res){
        try {
            // Procura um usuario no banco de dados pelo nome com o id passado como parametro
            const user = await User.find({name: req.params.id})

            if(user.length == 0){
                return res.status(400).send({error: 'Usuário não encontrado.' })
            }

            if(!user){
                return res.status(400).send({error: 'Usuário não encontrado.' })
            }

            return res.json(user);

        } catch (error) {

            return res.status(400).send({error: 'Ocorreu um erro ao listar usuário.' })

        }

    },
    // Funcao para atualizar os dados do usuario
    async update(req, res){
        try {
            // Procura um usuario pelo id passado na url e atualiza os dados com as modificacoes no banco
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(user);

        } catch (error) {
            return res.status(400).send({error: 'Erro ao listar usuários.' })
        }
    },
    // Função para deletar um usuario
    async destroy(req, res){
        try {
            // Procura um usuario pelo id fornecido na url e em seguida deleta, caso exista.
            await User.findByIdAndRemove(req.params.id);

            return res.send('user removido!');

        } catch (error) {
            
            return res.status(400).send({error: 'Erro ao listar usuários.' })

        }
    },
    // Funcao para atualizar a senha do usuario
    async updatePassword(req, res) {
        try {
            // Procura por um usuario com o id fornecido como parametro e pega todos os seus dados
            const user = await User.findById({_id: req.params.id}).select('+password')
            // Pega a senha atual do usuario fornecido no formulario
            const password = req.body.password;
            // Compara a senha do formulario com a senha armazenada no banco de dados. Verifica se realmente é o usuario
            bcrypt.compare(password, user.password, (async(error, isMatch) => {
                if(isMatch) { // Se as senhas forem iguais isMatch = true
                    // Cria uma hash com a nova senha que o usuario quer atualizar
                    const hash = await bcrypt.hash(req.body.newPassword, 10)
                    // Encontra o usuario pelo id e atualiza o banco de dados com a nova senha
                    const userUpdate = await User.findByIdAndUpdate({_id: req.params.id}, {password: hash}, {new: true});
                    return res.status(200).send(userUpdate)
                }
                else {
                    return res.status(400).send({error: 'Senha invalida!'})
                }
            }))
        }
        catch (error) {
            return res.status(400).send({error: 'Senha invalida!'})
        }
    }
}