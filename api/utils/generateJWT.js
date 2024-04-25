const jwt = require('jsonwebtoken')

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id }

    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' }, (err, token) => {
      if (err) {
        console.log(err)
        reject('No se pudo generar el token')
      } else {
        resolve(token)
      }
    })
  })
}

module.exports = { generateJWT }
