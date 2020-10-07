var router = require('express').Router()
var clients = require('../models/client')


// get all clients
router.get('/api/clients', (req, res) => {
  clients.find()
    .then(clients => {
      res.status(200).send(clients)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// post new client
router.post('/api/clients', (req, res) => {
  clients.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
module.exports = { router }