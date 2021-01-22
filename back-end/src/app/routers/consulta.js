const express = require('express')
const router = express.Router();

const ProductController = require('../controllers/consultaController')

const midwareAuthControl = require('../middlewares/auth')

router.use(midwareAuthControl)

// -- Rotas do CRUD da consulta -- //

// Rota para registrar uma consulta
router.post('/register', ProductController.store);
// Rota para listar todas as consultas
router.get('/consultas', ProductController.index);
// Rota para listar uma unica consutla
router.get('/consulta/:id', ProductController.show);
// Rota para editar uma consulta
router.put('/edit-consulta/:id', ProductController.update);
// Rota para deletar uma consulta
router.delete('/delet-consulta/:id', ProductController.destroy);




module.exports = router;