const express = require('express')
const { default: fetch } = require('node-fetch')

const app = express()

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || 'http://localhost:3000'

app.get('/', (_, res) => {
  fetch(DATE_SERVER_HOST).then(resp => resp.json()).then(date => {
    res.send(`Hello! The current date is ${date}\n`)
  })
})

app.listen(3000, () => {
  console.log('Ready index');
})