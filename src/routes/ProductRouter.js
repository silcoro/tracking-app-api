const {Router} = require('express');

const { GetProduct } = require('../Controllers/Product/GetProduct');

const { PostProduct } = require('../Controllers/Product/PostProduct');

const route = Router();

route.get('/', GetProduct);
route.post('/create', PostProduct);

module.exports = route;