const express = require('express')
const router = express.Router();

const userController = require('../controllers/usersController')

const midwareAuthControl = require('../middlewares/auth')
const midwareAuthAndEadminControl = require('../middlewares/eAdmin')

router.use(midwareAuthControl)

// -- Rotas do CRUD do usuário -- //
router.get('/users', midwareAuthAndEadminControl, userController.index); 
router.get('/user/:id', midwareAuthAndEadminControl, userController.show);
router.get('/userName/:id', midwareAuthAndEadminControl, userController.showName);
router.put('/userUp/:id', userController.update);
router.put('/userUpPassword/:id', userController.updatePassword);
router.delete('/userDes/:id', userController.destroy);

module.exports = router;