const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kriticSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  profileImage: {
    type: Number
  }
}, {
    collection: 'Kritik'
  })

module.exports = mongoose.model('Student', kriticSchema)