let router = require('express').Router();
let Users = require('../models/user');
let session = require('./session')

let loginError = new Error('Bad Email or Password')

// get all users
router.get('/auth/users', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).send(users)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/auth/register', (req, res) => {
  if (req.body.password.length <= 5) {
    return res.status(400).send({
      error: 'Password must be at least 6 characters'
    })
  }
  // @ts-ignore
  req.body.password = Users.generateHash(req.body.password)
  Users.create(req.body)
    .then(user => {
      // @ts-ignore
      delete user._doc.password
      req.session.uid = user._id
      res.send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/auth/login', (req, res) => {
  Users.findOne({
    email: req.body.email
  })
    .then(user => {
      // @ts-ignore
      user.validatePassword(req.body.password)
        .then(valid => {
          if (!valid) {
            return res.status(400).send(loginError)
          }
          // @ts-ignore
          delete user._doc.password
          req.session.uid = user._id;
          // @ts-ignore
          user.password = null;
          res.status(200).send({
            message: 'Successfully logged in',
            session: req.session.uid,
            data: user
          })
        })
        .catch(err => {
          res.status(400).send({ loginError, Msg: "Second Catch" })
        })
    })
    .catch(err => {
      res.status(400).send(loginError)
    })
})

router.delete('/auth/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send(err)
    }
    return res.send({
      message: 'Logout Successful'
    })
  })
})

router.get('/auth/authenticate', (req, res) => {
  Users.findById(req.session.uid)
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: 'Please login to continue'
        })
      }
      // @ts-ignore
      delete user._doc.password
      res.send(user)
    }).catch(err => {
      res.status(500).send(err)
    })
})

module.exports = {
  router,
  session
}