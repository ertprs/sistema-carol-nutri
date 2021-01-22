const nodemailer = require('nodemailer')
const path = require('path')


const { host, port, user, pass} = require('../config/mailer')

// Se conecta a um servidor SMTP separadamente para cada mensagem
const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

  module.exports = transport