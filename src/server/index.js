// import bodyParser from 'body-parser'
const express = require('express')

const server = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())

// const middleware = [
//   bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
//   bodyParser.json({ limit: '50mb', extended: true }),
// ]

// middleware.forEach((it) => server.use(it))

server.get('/api/v1/test', (req, res) => {
  res.json({ hello: 'world' })
})

server.post('/api/v1/auth', (req, res) => {
  console.log(req.body)
  res.json({status: 'ok'})
})

server.listen(3004, () => {
  console.log('fuck u its updating')
})