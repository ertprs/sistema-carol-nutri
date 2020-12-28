const express = require('express')
const router = express.Router();

const ProtocolService = require('../controllers/protocolServiceController')

// -- Rotas do CRUD do usuário -- //
router.post('/register', ProtocolService.store);
router.get('/list', ProtocolService.index);
router.get('/list/:id', ProtocolService.show);
router.put('/edit/:id', ProtocolService.update);
router.delete('/delete/:id', ProtocolService.destroy);


module.exports = router;