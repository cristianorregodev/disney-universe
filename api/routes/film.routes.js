const { Router } = require('express')
const { check } = require('express-validator')
const filmController = require('../controllers/film.controller.js')
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
    check('genre', 'El genero debe ser un formato válido').optional().isInt(),
    check('order', 'el orden debe ser ASC | DESC').optional().isIn(['ASC', 'DESC']),
    fieldsValidations,
  ],
  filmController.list
)

router.get('/:id', [check('id').custom(dbValidators.existMovieById), fieldsValidations], filmController.show)

router.post(
  '/',
  [
    check('title', 'El nombre es obligatorio').not().isEmpty(),
    check('release', 'La fecha de lanzamiento es obligatoria').not().isEmpty(),
    check('stars', 'La calificación es obligatoria y debe estar entre 1 y 5').not().isEmpty().isIn([1, 2, 3, 4, 5]),
    check('image', 'La URL de la imagen es obligatoria').not().isEmpty(),
    fieldsValidations,
  ],
  filmController.create
)

router.put(
  '/:id',
  [
    check('stars', 'La calificación es obligatoria y debe estar entre 1 y 5').optional().isIn([1, 2, 3, 4, 5]),
    check('id').custom(dbValidators.existMovieById),
    fieldsValidations,
  ],
  filmController.edit
)

router.delete('/:id', [check('id').custom(dbValidators.existMovieById), fieldsValidations], filmController.destroy)
module.exports = router
