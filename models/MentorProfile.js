const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mentor'
  },
  availability: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  }
});

module.exports = MentorProfile = mongoose.model('mentorProfile', MentorSchema);
