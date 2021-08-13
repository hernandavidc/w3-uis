const User = require('../models/user');
const bcrypt = require('bcryptjs');

const { generatorJWT } = require('../helpers/generator-jwt');

const login = async (req, res) => {
    const { email, password } = req.body;
    const strError = 'User / password incorrecto';

    try{
        const user = await User.findOne({ email, state: true });
        console.log(user, email, password)
        if(!user){
            return res.status(400).json({
                msg: strError
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({
                msg: strError
            })
        }

        const token = await generatorJWT(user.id);

        res.json({
            user,
            token
        })
        
    } catch(err){
        console.log(err);
        res.status(500).json({
            msg: 'Error en el servidor, hable con el administrador'
        })
    }
}

module.exports = {
    login
}