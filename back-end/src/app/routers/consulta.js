const express = require('express')
const router = express.Router();

const ProductController = require('../controllers/consultaController')

const midwareAuthEadminControl = require('../middlewares/eAdmin')
const midwareAuthControl = require('../middlewares/auth')

// -- Rotas do CRUD da consulta -- //

// Rota para registrar uma consulta
router.post('/register',  ProductController.store);
// Rota para listar todas as consultas
router.get('/consultas', midwareAuthControl, ProductController.index);
// Rota para listar uma unica consutla
router.get('/consultaId/:id', midwareAuthControl, ProductController.showId);
// Rota para listar uma unica consutla
router.get('/consulta/:data', midwareAuthControl, ProductController.show);
// Rota para editar uma consulta
router.put('/edit-consulta/:id', midwareAuthEadminControl, ProductController.update);
// Rota para deletar uma consulta
router.delete('/delet-consulta/:id', midwareAuthEadminControl, ProductController.destroy);




module.exports = router;