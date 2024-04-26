const jwt = require('jsonwebtoken')
const User = require('../models').user

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header('d-token')

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    })
  }

  try {
    // verify the token using the `jwt.verify()` method.
    const { id } = jwt.verify(token, process.env.SECRET_KEY)

    // Get user data from the database
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(401).json({
        msg: 'Token no válido - usuario no existe DB',
      })
    }

    req.user = user
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({
      msg: 'Token no válido',
    })
  }
}

module.exports = validateJWT
