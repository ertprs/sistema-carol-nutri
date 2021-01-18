const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const cors = require('cors')
const helmet = require("helmet")
const RateLimit = require("express-rate-limit")

const app = express()

const requestLimit = RateLimit({
    windowMs: 1000 * 60 * 15,
    max: 100
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())
app.use(helmet())
app.use(requestLimit)

//--Rotas
app.use('/user', require('./app/routers/user'))
app.use('/consultas', require('./app/routers/consulta'))
app.use('/auth', require('./app/controllers/authController'))
app.use('/form', require('./app/routers/nutritionistForm'))
app.use('/agendamento', require('./app/routers/scheduling'))
app.use('/artigo', require('./app/routers//article'))
app.use('/receitas', require('./app/routers//recordRecipes'))

app.listen(PORT, () => {
    console.log("servidor rodando..." + PORT) 
})