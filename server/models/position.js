let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'position'

let position = new Schema({

  positionTitle: { type: String },
  positionDescription: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

position.pre('save', function (next) {
  this.markModified('position')
  next()
})

module.exports = mongoose.model(schemName, position)
