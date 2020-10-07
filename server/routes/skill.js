var router = require('express').Router()
var skills = require('../models/skill')


// get all skills
router.get('/api/skills', (req, res) => {
  skills.find()
    .then(skills => {
      res.status(200).send(skills)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// post new skill
router.post('/api/skills', (req, res) => {
  skills.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
module.exports = { router }