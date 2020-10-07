var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var schemaName = 'User';
const SALT = 12

var schema = new Schema({
  //username: { type: String, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() }
})

schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

schema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model(schemaName, schema)