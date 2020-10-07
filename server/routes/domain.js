var router = require('express').Router()
var domains = require('../models/domain')


// get all domains
router.get('/api/domains', (req, res) => {
  domains.find()
    .then(domains => {
      res.status(200).send(domains)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// post new domain
router.post('/api/domains', (req, res) => {
  domains.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
module.exports = { router }