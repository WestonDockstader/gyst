var router = require('express').Router()
var platforms = require('../models/platform')


// get all platforms
router.get('/api/platforms', (req, res) => {
  platforms.find()
    .then(platforms => {
      res.status(200).send(platforms)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// post new platform
router.post('/api/platforms', (req, res) => {
  platforms.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
module.exports = { router }