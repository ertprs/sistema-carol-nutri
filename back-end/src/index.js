const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

//--Rotas
app.use('/user', require('./app/routers/user'))
app.use('/consultas', require('./app/routers/consulta'))
app.use('/auth', require('./app/controllers/authController'))
app.use('/form', require('./app/routers/nutritionistForm'))

app.listen(PORT, () => {
    console.log("servidor rodando...")
})