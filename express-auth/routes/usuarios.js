
const { Router } = require('express');
const { check } = require('express-validator');

const { validateData, validateJWT, hasRol } = require('../middlewares');

const { emailExists, isRolValid, userIdExists } = require('../helpers/req-validators');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', [
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(userIdExists),
    check('rol').custom(isRolValid),
    validateData
], usuariosPut );

router.post('/', [
    validateJWT,
    hasRol('Admin', 'Seller'),
    check('name', 'El nombre es requerio').not().isEmpty(),
    check('password', 'La pass debe tener minimo 6 caracteres').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(emailExists),
    check('rol').custom(isRolValid),
    validateData
], usuariosPost );

router.delete('/:id', [
    validateJWT,
    // isAdmin,
    hasRol('Admin'),
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(userIdExists),
], usuariosDelete );

router.patch('/', usuariosPatch );

module.exports = router;