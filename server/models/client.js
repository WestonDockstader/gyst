let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'client'

let client = new Schema({

  clientName: { type: String, required: true },
  LastUpdated: { type: Date, required: true, default: Date.now() }

})

client.pre('save', function (next) {
  this.markModified('client')
  next()
})

module.exports = mongoose.model(schemName, client)