const express = require('express')
const router = express.Router();

const Article = require('../controllers/registrationArticle')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

// -- Rotas do CRUD do usuário -- //
router.post('/register', Article.store);
router.get('/list', Article.index);
router.get('/list/:id', Article.show);
router.put('/edit/:id', Article.update);
router.delete('/delete/:id', Article.destroy);

module.exports = router;