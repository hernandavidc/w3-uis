const express = require('express');
const routes = express.Router();

const {
        usersGet,
        usersPost,
        usersPut,
        usersGetByCc,
        usersDel,
    } = require('../controllers/users')

routes.get('/', usersGet );

//CREAR
routes.post('/', usersPost )

routes.get('/:cc', usersPut );

//Update
routes.put('/:cc', usersGetByCc )

//Delete
routes.delete('/:cc', usersDel )

module.exports = routes;