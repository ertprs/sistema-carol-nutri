const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const { host, port, user, pass} = require('../config/mailer')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

  module.exports = transport