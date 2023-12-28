const mongoose = require('mongoose');

// Define the schema for the contact form
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true }
,{ collection: 'usersMessages' });

// Create the Contact model
const contact = mongoose.model('contact', contactSchema);

module.exports = contact;
