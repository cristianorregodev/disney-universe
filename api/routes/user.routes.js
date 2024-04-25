const { Router } = require('express')
const { check } = require('express-validator')

const { fieldsValidations } = require('../middlewares')
const userController = require('../controllers/user.controller.js')

const router = Router()

router.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'Debe ingresar un correo válido').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 }),
    fieldsValidations,
  ],
  userController.create
)

module.exports = router
