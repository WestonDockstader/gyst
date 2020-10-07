let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'course'

let course = new Schema({

  courseName: { type: String },
  courseDescription: { type: String },
  courseComments: { type: String },
  courseStatus: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

course.pre('save', function (next) {
  this.markModified('platform')
  next()
})

module.exports = mongoose.model(schemName, course)