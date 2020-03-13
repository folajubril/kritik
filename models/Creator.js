const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  field: {
    type: String
  },
  bio: {
      type: String
  }
}, {
    collection: 'Creators'
  })

module.exports = mongoose.model('Creators', creatorSchema)