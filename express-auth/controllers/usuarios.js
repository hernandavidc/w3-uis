const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const usuariosGet = (req = request, res = response) => {

    res.json({msg: 'get API - controlador',});
}

const usuariosPost = async (req, res = response) => {
    const { name, email, password, rol } = req.body;

    const user = new User({ name, email, password, rol });

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        user
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}