const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
   photo: {
    type: String,
    required: false // Set to true if photo is mandatory
  }
  
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;