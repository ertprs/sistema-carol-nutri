const express = require('express')
const routes = express.Router();

const ProductController = require('./controllers/usersController')


routes.get('/users', ProductController.index);
routes.get('/user/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);




module.exports = routes;