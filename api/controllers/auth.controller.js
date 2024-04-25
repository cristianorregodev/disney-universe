const bcryptjs = require('bcryptjs')
const User = require('../models').user
const { generateJWT } = require('../utils/generateJWT')

const login = async (req, res = response) => {
  const { email, password } = req.body

  try {
    //Verificar si el ususario esta registradoes
    const user = await User.findOne({
      where: { email },
    })
    if (!user) {
      return res.status(400).json({ message: 'El Usuario ingresado no es valido.' })
    }

    //Verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(400).json({ message: 'La Contraseña ingresada no es valida.' })
    }

    //Generar JWT
    const token = await generateJWT(user.id)

    const { id, name } = user
    res.json({
      user: { id, name, token },
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      msg: 'Algo salió mal al intentar iniciar sesión. Pongase en contacto con el administrador.',
    })
  }
}

const register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.create({ name, email, password })
    // Encriptar contraseña
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)
    await user.save()

    //Generar JWT
    const token = await generateJWT(user.id)

    res.status(201).json({ user: { id: user.id, name: user.name, token } })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

module.exports = { login, register }
