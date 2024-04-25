const express = require('express')
const cors = require('cors')
const { authRoutes, characterRoutes, userRoutes, filmRoutes } = require('../routes')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.endpoints = {
      auth: '/api/auth',
      characters: '/api/characters',
    }

    // Middlewares
    this.middlewares()

    // Rutas de mi aplicación
    this.routes()
  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // Lectura y parseo del body
    this.app.use(express.json())

    // Directorio Público
    this.app.use(express.static('docs/views'))
  }

  routes() {
    this.app.use(this.endpoints.auth, authRoutes)
    this.app.use(this.endpoints.characters, characterRoutes)
  }

  start() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port)
    })
  }
}

module.exports = Server
