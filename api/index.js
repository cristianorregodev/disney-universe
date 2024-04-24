require('dotenv').config()
const Server = require('./server/index.js')

const server = new Server()

server.start()
