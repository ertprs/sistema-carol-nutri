const express = require('express')
const router = express.Router();

// importar os modulos dentro da aplicação
const Article = require('../controllers/registrationArticle')
// Middleware de eAdmin
const midwareAuthEadminControl = require('../middlewares/eAdmin')

// -- Rotas do CRUD de artigos -- //

// Rota para registrar um artigo
router.post('/register', midwareAuthEadminControl, Article.store);
// Rota para listar todos os artigos
router.get('/list', Article.index);
// Rota para listar um unico artigo
router.get('/list/:id', Article.show);
// Rota para listar artigos pelo nome
router.get('/listName/:id', Article.showName);
// Rota para editar um artigo
router.put('/edit/:id', midwareAuthEadminControl, Article.update);
// Rota para deletar um artigo
router.delete('/delete/:id', midwareAuthEadminControl, Article.destroy);

module.exports = router;