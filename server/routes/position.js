var router = require('express').Router()
var positions = require('../models/position')


// get all positions
router.get('/api/positions', (req, res) => {
  positions.find()
    .then(positions => {
      res.status(200).send(positions)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// post new position
router.post('/api/positions', (req, res) => {
  positions.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
module.exports = { router }