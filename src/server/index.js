const express = require('express')
const { readFile, appendFile, writeFile, stat, unlink } = require('fs').promises
const path = require('path')
const axios = require('axios')
const circularJSON = require('circular-json')

const server = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())

// server.post('/api/v1/auth', (req, res) => {
//   res.json({ isLogged: true })
// })

server.get('/api/v1/posts', async (req, res) => {
  const pathToData = path.join(__dirname, '/data/posts.json')
  const data = await axios(`https://jsonplaceholder.typicode.com/users`)
  await writeFile(pathToData, circularJSON.stringify(data.data), { encoding: 'utf8' })
  res.send(circularJSON.stringify(data.data))
})

// server.get('/api/v1/posts', (req, res) => {
//   readFile(`${__dirname}/data/posts.json`, { encoding: 'utf8' })
//     .then((posts) => res.send(posts))
//     .catch(async () => {
//       const posts = await axios(`https://jsonplaceholder.typicode.com/users`).then((data) => data)
//       writeFile(`${__dirname}/data/posts.json`, JSON.stringify(posts), { encoding: 'utf8' })
//       res.send(posts)
//     })
// })

server.listen(3004, () => {})
