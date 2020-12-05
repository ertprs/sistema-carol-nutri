const express = require('express')
const router = express.Router();

const SchedulingDate = require('../controllers/schedulingDate')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

router.use(midwareAuthEadminControl)

// -- Rotas do CRUD do usuário -- //
router.post('/register', SchedulingDate.store);
router.get('/list', SchedulingDate.index);
router.get('/list/:id', SchedulingDate.show);
router.put('/edit/:id', SchedulingDate.update);
router.delete('/delete/:id', SchedulingDate.destroy);


module.exports = router;