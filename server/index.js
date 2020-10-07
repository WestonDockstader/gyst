var express = require('express')
var bp = require('body-parser')
var app = express()
var server = require('http').createServer(app)
var cors = require('cors')
var port = process.env.PORT || 3000


var whitelist = ['http://localhost:8080']; // after heroku is ready add to whitelist
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions))

// @ts-ignore
require('./server')

app.use(express.static(__dirname + '/../www/dist'))
app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))




let clients = require('./routes/client')
let domains = require('./routes/domain')
let locations = require('./routes/location')
let people = require('./routes/person')
let platforms = require('./routes/platform')
let positions = require('./routes/position')
let skills = require('./routes/skill')

app.use(clients.router)
app.use(domains.router)
app.use(locations.router)
app.use(people.router)
app.use(platforms.router)
app.use(positions.router)
app.use(skills.router)

app.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})
let auth = require('./auth/routes')
app.use(auth.session)
app.use(auth.router)
app.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

app.put('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})

app.listen(port, () => {
  console.log('server running on port', port)
})


