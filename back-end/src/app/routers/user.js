const express = require('express')
const router = express.Router();

const userController = require('../controllers/usersController')

const midwareAuthControl = require('../middlewares/auth')
const midwareAuthAndEadminControl = require('../middlewares/eAdmin')

router.use(midwareAuthControl)

// -- Rotas do CRUD do usuário -- //

// Rota para listar todos os usuarios
router.get('/users', midwareAuthAndEadminControl, userController.index); 
// Rota para listar um unico usuario
router.get('/user/:id', midwareAuthAndEadminControl, userController.show);
// Rota para listar um unico usuario
router.get('/userEmail/:email', midwareAuthAndEadminControl, userController.showEmail);
// Rota para listar um usuario pelo nome
router.get('/userName/:id', midwareAuthAndEadminControl, userController.showName);
// Rota para editar um usuario
router.put('/userUp/:id', userController.update);
// Rota para redefenir a senha do usuario
router.put('/userUpPassword/:id', userController.updatePassword);
// Rota para deletar um usuario
router.delete('/userDes/:id', userController.destroy);

module.exports = router;