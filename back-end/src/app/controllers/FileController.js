// const mongoose = require('../../database')
// require('../models/user')
// const User = mongoose.model('User')

// module.exports = {

//     async store(req, res) {
//         try {
            
//             const { filename: file, path: dest} = req.file;
            
//             const updateUser = await User.findByIdAndUpdate(req.params.id, {avatar: dest}, { new: true})

//             return res.json(updateUser)
//         }
//         catch (error) {
//             return res.status(400).send({error: 'Erro ao atualizar foto.' })
//         }
//     }
// }

