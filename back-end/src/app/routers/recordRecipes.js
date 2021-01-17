const express = require('express')
const router = express.Router();

const RecordRecipes = require('../controllers/recordRecipes')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

router.post('/register', midwareAuthEadminControl, RecordRecipes.store);
router.get('/list', RecordRecipes.index);
router.get('/list/:id', RecordRecipes.show);
router.get('/listName/:id', RecordRecipes.showName);
router.put('/edit/:id', midwareAuthEadminControl, RecordRecipes.update);
router.delete('/delete/:id', midwareAuthEadminControl, RecordRecipes.destroy);

module.exports = router;