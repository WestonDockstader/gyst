let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'People'

let skillSchema = new Schema({
  skillID: { type: ObjectId, ref: 'Skill' }
})

let certificationSchema = new Schema({
  CID: { type: ObjectId, ref: 'certification' }
})

let LGSchema = new Schema({
  LGID: { type: ObjectId, ref: 'learningGroups' }
})

let courseSchema = new Schema({
  courseID: { type: ObjectId, ref: 'course' }
})

let projectSchema = new Schema({
  PID: { type: ObjectId, ref: 'project' }
})

let person = new Schema({

  personLastName: { type: String },
  personFirstName: { type: String },
  personMiddleName: { type: String },
  personLocation: { type: String },
  personPosition: { type: ObjectId, ref: 'Position' },
  personStartDate: { type: Date, required: true },
  /* set end date equal to start date on intial save, and then change it when person leaves */
  personEndDate: { type: Date, required: true },
  userID: { type: ObjectId, ref: 'User' },
  skills: [skillSchema],
  learningGroups: [LGSchema],
  certifications: [certificationSchema],
  courses: [courseSchema],
  projects: [projectSchema],
  manager: { type: ObjectId, ref: 'People' },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

person.pre('save', function (next) {
  this.markModified('person')
  next()
})

module.exports = mongoose.model(schemName, person)