const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://ITTRWUser:ImP0rTanT%2F1%23@cluster0-ye9gp.mongodb.net/gyst?retryWrites=true&w=majority'
var connection = mongoose.connection

mongoose.connect(connectionString, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', () => {
  console.log('Connected to DB')
})