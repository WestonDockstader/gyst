let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'learningGroup'

let learningGroup = new Schema({

  learningGroupName: { type: String },
  learningGroupDescription: { type: String },
  learningGroupComments: { type: String },
  learningGroupStatus: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

learningGroup.pre('save', function (next) {
  this.markModified('platform')
  next()
})

module.exports = mongoose.model(schemName, learningGroup)