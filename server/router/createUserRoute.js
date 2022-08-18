const route = require('express').Router();
const createUserController = require('../controller/createUserController');

route.post('/register', createUserController.createUser);
route.get('/user', createUserController.findUser);


module.exports = route;