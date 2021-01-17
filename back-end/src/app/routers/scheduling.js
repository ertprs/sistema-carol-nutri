const express = require('express')
const router = express.Router();

const SchedulingDate = require('../controllers/schedulingDate')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

// -- Rotas do CRUD do usuário -- //
router.post('/register', midwareAuthEadminControl, SchedulingDate.store);
router.get('/list', SchedulingDate.index);
router.get('/listId/:id', SchedulingDate.showId);
router.get('/list/:id', SchedulingDate.show);
router.put('/edit/:id', midwareAuthEadminControl, SchedulingDate.update);
router.delete('/delete/:id', midwareAuthEadminControl, SchedulingDate.destroy);


module.exports = router;