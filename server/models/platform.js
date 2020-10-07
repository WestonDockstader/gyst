let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'platform'

let platform = new Schema({

  platformName: { type: String },
  platformDescription: { type: String },
  platformComments: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

platform.pre('save', function (next) {
  this.markModified('platform')
  next()
})

module.exports = mongoose.model(schemName, platform)
