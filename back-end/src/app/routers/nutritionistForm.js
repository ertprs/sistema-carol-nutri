const express = require('express')
const router = express.Router();

const midwareAuthControl = require('../middlewares/auth')

const ProtocolService = require('../controllers/protocolServiceController')

router.use(midwareAuthControl)

// -- Rotas do CRUD do formulario -- //

// Rota para criar um Prococolo de Servico
router.post('/register', ProtocolService.store);
// Rota para listar todos os Prococolos de Servicos
router.get('/list', ProtocolService.index);
// Rota para listar um unico Prococolo de Servico
router.get('/list/:id', ProtocolService.show);
// Rota para editar um Prococolo de Servico
router.put('/edit/:id', ProtocolService.update);
// Rota para deletar um Prococolo de Servico
router.delete('/delete/:id', ProtocolService.destroy);


module.exports = router;