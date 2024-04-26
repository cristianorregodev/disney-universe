const { Router } = require('express')
const { check } = require('express-validator')
const characterController = require('../controllers/character.controller.js')
const { fieldsValidations, dbValidators } = require('../middlewares')

const router = Router()

router.get(
  '/',
  [
    check('name', 'El nombre debe ser una cadena de texto')
      .optional()
      .custom((value) => {
        return typeof Number(value) !== 'string' && isNaN(Number(value))
      }),
    check('age', 'La edad debe ser un número entero').optional().isInt(),
    check('movieId', 'El id de la pelicula debe ser un formato válido').optional().isInt(),
    fieldsValidations,
  ],
  characterController.list
)

router.get('/:id', [check('id').custom(dbValidators.existCharacterById), fieldsValidations], characterController.show)

router.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('age', 'La edad es obligatoria').not().isEmpty().isInt(),
    check('weight', 'El peso es obligatorio').not().isEmpty(),
    check('history', 'La historia es obligatoria').not().isEmpty(),
    check('image', 'La historia es obligatoria').not().isEmpty(),
    fieldsValidations,
  ],
  characterController.create
)

router.put(
  '/:id',
  [
    check('age', 'La edad es obligatoria').optional().isInt(),
    check('weight', 'El peso es obligatorio').optional().isInt(),
    check('id').custom(dbValidators.existCharacterById),
    fieldsValidations,
  ],
  characterController.edit
)

router.delete(
  '/:id',
  [check('id').custom(dbValidators.existCharacterById), fieldsValidations],
  characterController.destroy
)
module.exports = router
