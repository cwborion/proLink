const mongoose = require('mongoose');

const PupilSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pupil'
  },
  goal: {
    type: String,
    required: true
  }
});

module.exports = PupilProfile = mongoose.model('pupilProfile', PupilSchema);
