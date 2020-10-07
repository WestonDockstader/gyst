var router = require('express').Router()
var locations = require('../models/location')


// get all locations
router.get('/api/locations', (req, res) => {
  locations.find()
    .then(locations => {
      res.status(200).send(locations)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// post new location
router.post('/api/locations', (req, res) => {
  locations.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
module.exports = { router }