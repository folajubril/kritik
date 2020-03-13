const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contentSchema = new Schema({
  creatorName: {
    type: String
  },
  contentName: {
    type: String
  },
  contentType: {
    type: String
  },
  description: {
    type: Number
  },
  Status: {
      type: Boolean
  },
  likes: {
      type: Number
  }, 
  dislikes: {
      type: Number
  },
  content: {
    type: Number
  }
}, {
    collection: 'content'
  })

module.exports = mongoose.model('Content', contentSchema)