let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'certification'

let certification = new Schema({

  certificationName: { type: String },
  certificationDescription: { type: String },
  certificationComments: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

certification.pre('save', function (next) {
  this.markModified('certification')
  next()
})

module.exports = mongoose.model(schemName, certification)