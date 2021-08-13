const { Router } = require('express');
const { check } = require('express-validator');

const { validateData } = require('../middlewares/validate-data');

const { login } = require('../controllers/auth');

const router = Router();

router.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La password es obligatorio').not().isEmpty(),
    validateData
], login);

module.exports = router;