let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'Location'

let location = new Schema({

  locationDescription: { type: String },
  locationCountry: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

location.pre('save', function (next) {
  this.markModified('location')
  next()
})

module.exports = mongoose.model(schemName, location)