const express = require('express')
const router = express.Router();

const RecordRecipes = require('../controllers/recordRecipes')

const midwareAuthEadminControl = require('../middlewares/eAdmin')


// Rota para cadastrar uma receita. So admins podem cadastrar.
router.post('/register', midwareAuthEadminControl, RecordRecipes.store);
// Rota para listar todas as receitas
router.get('/list', RecordRecipes.index);
// Rota para listar uma unica receita
router.get('/list/:id', RecordRecipes.show);
// Rota para listar receitas pelo nome
router.get('/listName/:id', RecordRecipes.showName);
// Rota para editar uma receita
router.put('/edit/:id', midwareAuthEadminControl, RecordRecipes.update);
// Rota para deletar uma receita
router.delete('/delete/:id', midwareAuthEadminControl, RecordRecipes.destroy);

module.exports = router;