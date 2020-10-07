let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'domain'

let domain = new Schema({

  domainName: { type: String },
  domainDescription: { type: String },
  domainComment: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

domain.pre('save', function (next) {
  this.markModified('domain')
  next()
})

module.exports = mongoose.model(schemName, domain)