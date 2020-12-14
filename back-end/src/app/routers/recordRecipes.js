const express = require('express')
const router = express.Router();

const RecordRecipes = require('../controllers/recordRecipes')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

router.use(midwareAuthEadminControl)

router.post('/register', RecordRecipes.store);
router.get('/list', RecordRecipes.index);
router.get('/list/:id', RecordRecipes.show);
router.put('/edit/:id', RecordRecipes.update);
router.delete('/delete/:id', RecordRecipes.destroy);

module.exports = router;