const mongoose = require('mongoose');

// Configuracao do mongoose
mongoose.connect("mongodb+srv://devorion01:as123@cluster0-czhpf.mongodb.net/carol-nutricionista?retryWrites=true&w=majority",  {

    useNewUrlParser: true, // Analisador de string de conexão

    useUnifiedTopology: true, // Lida com o monitoramento de todos os servidores em um conjunto de réplicas ou cluster fragmentado.

    useCreateIndex: true,

    useFindAndModify: false

})
mongoose.Promise = global.Promise;

module.exports = mongoose