const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const PupilProfile = require('../../models/PupilProfile');
const PupilUser = require('../../models/PupilUser');

const MentorProfile = require('../../models/MentorProfile');
const MentorUser = require('../../models/MentorUser');

// @route  GET api/profile/pupil/me
// @desc   Get current pupils profile
// @access Private
router.get('/pupil/me', auth, async (req, res) => {
  try {
    const profile = await PupilProfile.findOne({
      user: req.user.id
    }).populate('pupil', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/profile/pupil
// @desc   Create or update pupils profile
// @access Private
router.post(
  '/pupil',
  [
    auth,
    [
      check('goal', 'Goal is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { goal } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (goal) profileFields.goal = goal;

    try {
      let profile = await PupilProfile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await PupilProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create Profile
      profile = new PupilProfile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  DELETE api/profile/pupil
// @desc   Delete Pupil profile & user
// @access Private
router.delete('/pupil', auth, async (req, res) => {
  try {
    // Remove profile
    await PupilProfile.findOneAndRemove({ user: req.user.id });
    // Remove User
    await PupilUser.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

//

//                                                  *** ABOVE: PUPIL *** *** BELOW: MENTOR ***

//

// @route  GET api/profile/mentor/me
// @desc   Get current mentors profile
// @access Private
router.get('/mentor/me', auth, async (req, res) => {
  try {
    const profile = await MentorProfile.findOne({
      user: req.user.id
    }).populate('mentor', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/profile/mentor
// @desc   Create or update mentors profile
// @access Private
router.post(
  '/mentor',
  [
    auth,
    [
      check('availability', 'Availability is required')
        .not()
        .isEmpty(),
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('contactEmail', 'Valid contact email is required')
        .isEmail()
        .not()
        .isEmpty(),
      check('bio', 'Bio is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { availability, title, contactEmail, bio } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (availability) profileFields.availability = availability;
    if (title) profileFields.title = title;
    if (contactEmail) profileFields.contactEmail = contactEmail;
    if (bio) profileFields.bio = bio;

    try {
      let profile = await MentorProfile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await MentorProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create Profile
      profile = new MentorProfile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/profile/mentor
// @desc   Get all mentor profiles
// @access Public
router.get('/mentor', async (req, res) => {
  try {
    profiles = await MentorProfile.find().populate('user', ['name']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/profile/mentor/:mentor_id
// @desc   Get mentor profile by mentor ID
// @access Public
router.get('/mentor/:mentor_id', async (req, res) => {
  try {
    profile = await MentorProfile.findOne({
      user: req.params.mentor_id
    }).populate('user', ['name']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route  DELETE api/profile/mentor
// @desc   Delete Mentor profile & user
// @access Private
router.delete('/mentor', auth, async (req, res) => {
  try {
    // Remove profile
    await MentorProfile.findOneAndRemove({ user: req.user.id });
    // Remove User
    await MentorUser.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
