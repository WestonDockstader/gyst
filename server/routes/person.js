var router = require('express').Router()
var people = require('../models/person')


// get all people
router.get('/api/people', (req, res) => {
  people.find()
    .then(people => {
      res.status(200).send(people)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// get user
router.get('/api/people/:id', (req, res) => {
  people.findById(req.params.id)
    .then(person => {
      res.status(200).send(person)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// post new person
router.post('/api/people', (req, res) => {
  people.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// edit person
router.put('/api/people/:id/:type/:id2', (req, res) => {
  people.findByIdAndUpdate(req.params.id, { new: true })
    .then(person => {
      let type = req.params.type
      person[type] = req.params.id2
      person.save()
        .then(() => {
          res.status(200).send({ message: 'successfully updated person:', type })
        })
        .catch(err => {
          res.status(400).send(err)
        })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// add skill
router.post('/api/people/:id/:type', (req, res) => {
  people.findByIdAndUpdate(req.params.id, { new: true })
    .then(person => {
      let type = req.params.type
      //@ts-ignore
      person[type].push(req.body)
      person.save()
        .then(() => {
          res.status(200).send({ message: 'Successfully added to:', type })
        })
        .catch(err => {
          console.log(err)
        })
        .catch(err => {
          console.log(err)
        })
    })
})

module.exports = { router }