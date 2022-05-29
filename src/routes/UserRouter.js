const {Router} = require('express');

const { GetUser } = require('../Controllers/User/GetUser');

const { PostUser } = require('../Controllers/User/PostUser');

const route = Router();

route.get('/', GetUser);
route.post('/create', PostUser);

module.exports = route;