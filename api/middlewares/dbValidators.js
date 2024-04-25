const Character = require('../models').character
const User = require('../models').user
const existCharacterById = async (id = '') => {
  // Verificar si el personaje existe
  const isCharacter = await Character.findByPk(id)
  if (!isCharacter) throw new Error(`El personaje con id: ${id} no existe`)
}

const existEmail = async (email = '') => {
  // Verificar si el correo existe
  const isEmail = await User.findOne({ where: { email } })
  if (isEmail) throw new Error(`El correo: ${email} ya se encuentra registrado`)
}
module.exports = { existCharacterById, existEmail }
