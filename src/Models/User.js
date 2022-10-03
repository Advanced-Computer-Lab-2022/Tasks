const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true,
  },
  BornIn: {
    type: String,
    required: true
  },
  LivesIn: {
    type: String,
    required: true
  },
  MartialStatus: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  Job: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;