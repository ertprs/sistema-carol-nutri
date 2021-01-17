const express = require('express')
const router = express.Router();

const Article = require('../controllers/registrationArticle')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

// -- Rotas do CRUD do usuário -- //
router.post('/register', midwareAuthEadminControl, Article.store);
router.get('/list', Article.index);
router.get('/list/:id', Article.show);
router.get('/listName/:id', Article.showName);
router.put('/edit/:id', midwareAuthEadminControl, Article.update);
router.delete('/delete/:id', midwareAuthEadminControl, Article.destroy);

module.exports = router;