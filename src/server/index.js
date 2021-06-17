const express = require('express')
const { readFile, appendFile, writeFile, stat, unlink } = require('fs').promises
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const axios = require('axios')
const circularJSON = require('circular-json')

const server = express()

const setHeaders = () => (req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  next()
}

const middleware = [cors(), setHeaders(), express.urlencoded({ extended: false }), express.json()]

middleware.forEach((item) => server.use(item))

server.get('/api/v1/test', (req, res) => {
  res.send('lf')
})

server.get('/api/v1/posts', async (req, res) => {
  const pathToData = path.join(__dirname, '/data/posts.json')
  const posts = await readFile(pathToData, { encoding: 'utf8' })
  // res.send(circularJSON.stringify(data))
  res.send(posts)
})

server.get('/api/v1/posts/:id', async (req, res) => {
  const { id } = req.params
  const pathToData = path.join(__dirname, '/data/posts.json')
  const posts = await readFile(pathToData, { encoding: 'utf8' })
  const findedPost = JSON.parse(posts).data.find((item) => {
    return item.id === Number(id)
  })

  if (typeof findedPost === 'undefined') {
    res.send(`Post with id ${id} doesn't exist`)
  }

  res.send(findedPost)
})

server.post('/api/v1/posts')

server.listen(3004, () => {})
