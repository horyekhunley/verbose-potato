const mongoose = require('mongoose')

const tutorialSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },
  published: {
    type: Boolean,
    default: false
  },
},
  { timestamps: true }
)

module.exports = mongoose.model('Tutorial', tutorialSchema)