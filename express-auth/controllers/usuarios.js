const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const usuariosGet = async (req = request, res = response) => {
    const { limit = 10, numPage = 1 } = req.query;

    const skip = (Number(numPage) - 1) * Number(limit);

    const [ total, users ] = await Promise.all([
        User.countDocuments({ state: true }),
        User.find({ state: true }).skip(skip).limit(limit)
    ]);

    res.json({
        total,
        users
    });
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

const usuariosPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, password, email, ...data } = req.body;

    if(password){
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, data);

    res.json(user);
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async (req, res = response) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, { state: false });

    res.json(user);
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}