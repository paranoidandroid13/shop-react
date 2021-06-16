const express = require('express')
const { readFile, appendFile, writeFile, stat, unlink } = require('fs').promises
const path = require('path')

const server = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())

server.post('/api/v1/auth', (req, res) => {
  res.json({ isLogged: true })
})

server.get('/api/v1/posts', async (req, res) => {
  const { data } = await `https://mockapi.42.works/api/posts`
  const pathToData = path.join(__dirname, '/data/posts.json')
  const file = await writeFile(pathToData, data, { encoding: 'utf8' })
  res.json(file)
})

server.listen(3004, () => {
  const pathToData = path.join(__dirname, '/data/posts.json')

  console.log(pathToData)
})
