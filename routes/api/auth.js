const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Pupil = require('../../models/PupilUser');
const Mentor = require('../../models/MentorUser');

// @route GET api/auth/pupil
// @desc Test route
// @access Public
router.get('/pupil', auth, async (req, res) => {
  try {
    const user = await Pupil.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route GET api/auth/mentor
// @desc Test route
// @access Public
router.get('/mentor', auth, async (req, res) => {
  try {
    const user = await Mentor.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
