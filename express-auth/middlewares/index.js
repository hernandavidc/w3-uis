const validateData = require('../middlewares/validate-data');
const validateJWT = require('../middlewares/validate-jwt');
const hasRol = require('../middlewares/validate-rol');

module.exports = {
    ...validateData,
    ...validateJWT,
    ...hasRol
}