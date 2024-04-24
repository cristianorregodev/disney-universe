const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // Middlewares
    this.middlewares()

    // Rutas de mi aplicación
    //this.routes()
  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // Lectura y parseo del body
    this.app.use(express.json())

    // Directorio Público
    this.app.use(express.static('docs/views'))
  }

  // routes() {
  //     this.app.use('/api-docs', webRoute)
  //     this.app.use(this.usuariosPath, clientRoutes)
  // }

  start() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port)
    })
  }
}

module.exports = Server
