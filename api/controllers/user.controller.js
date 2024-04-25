const bcryptjs = require('bcryptjs')
const User = require('../models').user

const create = async (req = request, res = response) => {
  const { name, password, email } = req.body
  const user = new User({ name, email, password })

  // Encriptar contraseña
  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync(password, salt)

  await user.save()
  res.json({ user })
}

module.exports = { create }
