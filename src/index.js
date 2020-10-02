const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


//--Rotas
app.use('/api', require('./app/routes'))
app.use('/auth', require('./app/controllers/authController'))

app.listen(3000)