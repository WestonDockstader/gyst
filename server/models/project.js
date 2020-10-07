let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'project'

let project = new Schema({

  projectName: { type: String },
  projectDescription: { type: String },
  projectComments: { type: String },
  clientId: { type: ObjectId, ref: 'client' },
  projectStatus: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

project.pre('save', function (next) {
  this.markModified('platform')
  next()
})

module.exports = mongoose.model(schemName, project)