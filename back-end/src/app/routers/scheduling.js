const express = require('express')
const router = express.Router();

const SchedulingDate = require('../controllers/schedulingDate')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

// -- Rotas do CRUD do usuário -- //

// Rota para cadastrar um agendamento
router.post('/register', midwareAuthEadminControl, SchedulingDate.store);
// Rota para listar todos os agendamentos
router.get('/list', SchedulingDate.index);
// Rota para listar os agendamentos do dia atual
router.get('/listId/:id', SchedulingDate.showId);
// Rota para listar um unico agendamento
router.get('/list/:id', SchedulingDate.show);
// Rota para editar um agendamento
router.put('/edit/:id', midwareAuthEadminControl, SchedulingDate.update);
// Rota para deletar um agendamento
router.delete('/delete/:id', midwareAuthEadminControl, SchedulingDate.destroy);

module.exports = router;