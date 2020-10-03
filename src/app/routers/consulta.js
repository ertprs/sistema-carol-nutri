const express = require('express')
const router = express.Router();

const ProductController = require('../controllers/consultaController')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

router.use(midwareAuthEadminControl)

// -- Rotas do CRUD do usuário -- //
router.post('/register', ProductController.store);
router.get('/consultas', ProductController.index);
router.get('/consulta/:id', ProductController.show);
router.put('/edit-consulta/:id', ProductController.update);
router.delete('/delet-consulta/:id', ProductController.destroy);




module.exports = router;