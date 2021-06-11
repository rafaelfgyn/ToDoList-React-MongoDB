const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

const cors = require('./cors')


server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(cors)

server.listen(port, () => console.log('Backend is running on port ' + port))

module.exports = server