const express = require('express')
const router = express.Router();
const multer = require("multer");
const path = require("path");

const RecordRecipes = require('../controllers/recordRecipes')

const midwareAuthEadminControl = require('../middlewares/eAdmin')

router.use(midwareAuthEadminControl)

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function(req, file, cb) {
        var caminho = file.originalname + Date.now() + path.extname(file.originalname)
        cb(null, caminho)
        var desti = "/uploads/" + caminho
        RecordRecipes.updateOne({_id: req.user._id}, {image: desti}).then((req, res) => {}).catch((err) => {})
    },
})

const upload = multer({
    storage,
    fileFilter: function(req, file, cb){
        const ext = path.extname(file.originalname) 
        if(ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg') {
            req.flash("error_msg", "Apenas imagens do tipo JPEG, JPG e PNG são permitidas")
            cb(null, false)
        }
        else { cb(null, true); }
    },
    limits: {
        files: 1,
        fileSize: 2600 * 2600
    },
    
})

router.post('/register', upload.single('image'), RecordRecipes.store);
router.get('/list', RecordRecipes.index);
router.get('/list/:id', RecordRecipes.show);
router.put('/edit/:id', RecordRecipes.update);
router.delete('/delete/:id', RecordRecipes.destroy);

module.exports = router;