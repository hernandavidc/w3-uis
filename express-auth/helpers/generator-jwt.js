const config = require('config');
const jwt = require('jsonwebtoken');

const generatorJWT = (userId = '') => {
    return new Promise((resolve, reject) => {
        const payload = { userId };
        jwt.sign(payload, config.get('SECRETORPRIVATEKEY'), {
            expiresIn: '1h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('Error al generar el token')
            } else {
                resolve(token)
            }
        })
    })
}

module.exports = {
    generatorJWT
}