let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemName = 'skill'

let skill = new Schema({

  DomaintoSkill_Id: { type: ObjectId, ref: 'DomainstoSkills', required: true },
  PlatformtoSkill_Id: { type: ObjectId, ref: 'PlatformstoSkills', required: true },
  SkillName: { type: String },
  SkillDescription: { type: String },
  SkillComments: { type: String },
  LastUpdated: { type: Date, required: true, default: Date.now() }
})

skill.pre('save', function (next) {
  this.markModified('skill')
  next()
})

module.exports = mongoose.model(schemName, skill)