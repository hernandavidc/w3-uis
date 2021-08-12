const User = require('../models/user');
const Rol = require('../models/rol');

const emailExists = async (email = '') => {
    const user = await User.findOne({ email });
    if(user){
        throw new Error(`El correo ${email} ya existe en la plataforma`);
    }
}

const isRolValid = async (_rol = '') => {
    const rol = await Rol.findOne({ rol: _rol});
    if(!rol){
        throw new Error(`El rol ${_rol} no existe en la plataforma`);
    }
}

const userIdExists = async (id = '') => {
    const user = await User.findById(id);
    if(!user){
        throw new Error(`El id: ${id} no existe`);
    }
}

module.exports = {
    emailExists,
    isRolValid,
    userIdExists
}