const multer = require('multer')
const crypto = require('crypto')
const path = require('path')
const User = require("../models/user")

// const FileController = require("../controllers/FileController")

const express = require('express')
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads/'));
    },
    
    filename: function(req, file, cb) {
        var dest = ""
        crypto.randomBytes(16, async (err, res) => {
            if (err) return cb(err);
            var caminho = res.toString('hex') + path.extname(file.originalname);
            cb(null, caminho)
            dest = "/uploads/" + caminho
            await User.findByIdAndUpdate(req.params.id, {avatar: dest}).then((req, res) => {}).catch((err) => {})
        })
    },
})

const upload = multer({
    storage,
    fileFilter: function(req, file, cb){
        const ext = path.extname(file.originalname) 
        if(ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg') {
            cb(null, false)
        }
        else { cb(null, true); }
    },
})

router.put("/:id", upload.single("file"), (req, res) => {
    res.json({ ok: true })
})

module.exports = router;