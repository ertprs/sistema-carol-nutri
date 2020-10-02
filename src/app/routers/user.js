const express = require('express')
const router = express.Router();

const ProductController = require('../controllers/usersController')

const midwareAuthControl = require('../middlewares/auth')

router.use(midwareAuthControl)

// -- Rotas do CRUD do usuário -- //
router.get('/users', ProductController.index);
router.get('/user/:id', ProductController.show);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy);




module.exports = router;