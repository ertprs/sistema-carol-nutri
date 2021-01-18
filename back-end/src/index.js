const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const cors = require('cors')
const helmet = require("helmet")
const redis = require("redis")
const RateLimit = require("express-rate-limit")
const RateLimitRedis = require("rate-limit-redis")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors({
    origin: process.env.FRONT_URL
}))
app.use(helmet())
// if(process.env.NODE_ENV != 'development') {
//     app.use(new RateLimit({
//         store: new RateLimitRedis({
//             client: redis.createClient({
//                 host: process.env.REDIS_HOST,
//                 port: process.env.REDIS_PORT
//             })
//         }),
//         windowMs: 1000 * 60 * 15,
//         max: 100,
//     }))
// }

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