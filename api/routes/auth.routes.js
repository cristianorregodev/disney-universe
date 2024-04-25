const { Router } = require('express')
const { check } = require('express-validator')

const { fieldsValidations, dbValidators } = require('../middlewares')
const authController = require('../controllers/auth.controller.js')

const router = Router()

router.post(
  '/login',
  [
    check('email', 'EL correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    fieldsValidations,
  ],
  authController.login
)

router.post(
  '/register',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'Debe ingresar un correo válido').isEmail(),
    check('email').custom(dbValidators.existEmail),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 }),
    fieldsValidations,
  ],
  authController.register
)

module.exports = router
