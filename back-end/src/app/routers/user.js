const express = require('express')
const router = express.Router();

const userController = require('../controllers/usersController')

const midwareAuthControl = require('../middlewares/auth')

router.use(midwareAuthControl)

// -- Rotas do CRUD do usuário -- //
router.get('/users', userController.index); 
router.get('/user/:id', userController.show);
router.get('/userName/:id', userController.showName);
router.put('/userUp/:id', userController.update);
router.delete('/userDes/:id', userController.destroy);

module.exports = router;