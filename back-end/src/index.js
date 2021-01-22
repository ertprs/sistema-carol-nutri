// Express fornece ferramentas pequenas e robustas para servidores HTTP, tornando-o uma ótima solução para aplicativos de página única, sites, híbridos ou APIs HTTP públicas.
const express = require('express')
// Analise os corpos das solicitações recebidas em um middleware antes de seus manipuladores, disponíveis nas propriedade do req.body.
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

// Faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.
const cors = require('cors')
// O Helmet ajuda a proteger os aplicativos Express definindo vários cabeçalhos HTTP.
const helmet = require("helmet")
// Use para limitar solicitações repetidas a APIs e / ou endpoints públicos, como redefinição de senha.
const RateLimit = require("express-rate-limit")

const app = express()


const requestLimit = RateLimit({
    windowMs: 1000 * 60 * 15, // 15 minutos
    max: 100 // Limita cada IP a 100 solicitações por windowMs
})

app.use(bodyParser.json()) // O body-parser é um módulo capaz de converter o body da requisição para vários formatos. Um desses formatos é json.
app.use(bodyParser.urlencoded({ extended: false})) // Retorna o middleware que apenas analisa os corpos urlencoded e só olha as solicitações em que o cabeçalho Content-Type corresponde à opção type.
app.use(cors()) // Middleware cors()
app.use(helmet()) // 
app.use(requestLimit)

//--Rotas

// Rota princial para o usuario
app.use('/user', require('./app/routers/user'))
// Rota princial para a consulta
app.use('/consultas', require('./app/routers/consulta'))
// Rota de autenticacao do usuario
app.use('/auth', require('./app/controllers/authController'))
// // Rota princial para o Potocolo de Servicos
app.use('/form', require('./app/routers/nutritionistForm'))
// Rota princial para os agendamentos
app.use('/agendamento', require('./app/routers/scheduling'))
// Rota princial para os artigos
app.use('/artigo', require('./app/routers//article'))
// Rota princial para as receitas
app.use('/receitas', require('./app/routers//recordRecipes'))

// Servidor rodando na porta 8080
app.listen(PORT, () => {
    console.log("servidor rodando..." + PORT) 
})