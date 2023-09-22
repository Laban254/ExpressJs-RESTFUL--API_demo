'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// JSON schema for tasks
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  category: {
    type: String,
    required: 'Kindly enter the category of the task'
  },
  status: {
    type: [{
      type: String,
      enum: ['Pending', 'Ongoing', 'Completed']
    }],
    default: ['Pending']
  }
}, {
  timestamps: true // Add timestamps for createdAt and updatedAt
});

module.exports = mongoose.model('Task', TaskSchema);
