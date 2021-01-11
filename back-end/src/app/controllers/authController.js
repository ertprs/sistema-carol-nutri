const { Router } = require('express')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')

const mongoose = require('../../database')
const authconfig = require('../../config/auth')
const { use } = require('../../modules/mailer')

require('../models/user')
const User = mongoose.model('User')

// const multer = require('multer')
// const crypto = require('crypto')
// const path = require('path')



const router = express.Router()

function genareteToken(params = {}){
    try {
        return jwt.sign({params}, authconfig.secret, {
            expiresIn: 86400
        })
    } catch (error) {
        return res.status(400).send({error: 'Erro!.Tente novamente!'})
    }

}

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, path.join(__dirname, '../public/uploads/'));
//     },
//     filename: function(req, file, cb) {
//         crypto.randomBytes(16, (err, res) => {
//             if (err) return cb(err);
//             var caminho = res.toString('hex') + path.extname(file.originalname); 
//             cb(null, caminho)
//             var dest = "/uploads/" + caminho
//             User.updateOne({ _id: req.user._id}, {avatar: dest}).then((req, res) => {}).catch((err) => {})
//             //User.updateOne({_id: req.User._id}, {avatar: dest}).then((req, res) => {}).catch((err) => {})
//         }) 
//     },
// })

// const upload = multer({
//     storage,
//     fileFilter: function(req, file, cb){
//         const ext = path.extname(file.originalname) 
//         if(ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg') {
//             cb(null, false)
//         }
//         else { cb(null, true); }
//     },
// })

// router.post("/perfil", upload.single("file"), async(req, res) => {
//     res.json({ ok: true})
// })

router.post('/register', async (req, res) => {
    try{
        const {email} = req.body

        if(await User.findOne({email}))
            return res.status(400).send({error: 'Este E-mail já existe.'})

        const user = await User.create(req.body)

        user.password = undefined

        return res.send({
            user,
            token: genareteToken({id: user._id})
        })
        
    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Erro no registro.'})

    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password} = req.body

    const user = await  User.findOne({email}).select('+password')

    if(!user)
        return res.status(400).send({error: 'Usuário inexistente.'})

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Senha invalida!'})


        user.password = undefined

        return res.send({
            user,
            token: genareteToken({id: user._id})
        })
})

router.post('/forgot_password', async (req, res) => {
    try{
        const { email } = req.body

        const user = await  User.findOne({email})

        if(!user)
            return res.status(400).send({error: 'Usuário inexistente.'})

        const token = crypto.randomBytes(20).toString('hex')
        const now = new Date()
        now.setHours(now.getHours() + 1)

        await User.findByIdAndUpdate(user._id, {
            '$set': {
                passwordResetToken: token,
                passwordResetTxpires: now
            }
        })

        mailer.sendMail({
            to: 'juniorteixeira1805@gmail.com',
            from: 'devorion01@gmail.com',
            subject: 'Recuperação de senha',
            text: 'Token: ' + token,
            html: ''
        }), (err) => {
            if(err)
                return res.status(400).send({error: 'Erro ao enviar email!' })
        }

        return res.send()

    }catch(err){
        return res.status(400).send({error: 'Erro on forgot password, try again!' })
    }


})

router.post('/reset_password', async (req, res) => {

    try{
        const { email, token, password} = req.body

        const user = await User.findOne({email}).select('+passwordResetToken passwordResetTxpires')

        if(!user)
            return res.status(400).send({error: 'Usuário inexistente.'})
    
        if(token !== user.passwordResetToken)
            return res.status(400).send({error: 'Token invalido!'})

        const now = new Date()

        if(now > user.passwordResetTxpires)
            return res.status(400).send({error: 'Token expirado!'})
    
        user.password = password
        await user.save();

        res.send()

    }catch(err){
        console.log(err)
        return res.status(400).send({error: 'Erro on reset password, try again!' })
    }


})
module.exports = router;