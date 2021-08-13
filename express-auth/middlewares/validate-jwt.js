const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const validateJWT = async (req, res, next) =>{
    const token = req.header('token');

    if(!token){
        return res.status(401).json({
            msg: 'La petición no cuenta con token'
        });
    }

    try {
        const { userId } = jwt.verify(token, config.get('SECRETORPRIVATEKEY'));

        const user = await User.findById(userId);
        if(!user && !user.state){
            return res.status(401).json({
                msg: 'Token no válido'
            })
        }

        req.user = user;
        next();
    } catch(err){
        console.log(err);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = {
    validateJWT
}