const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Mentor = require('../../models/MentorUser');

// @route POST api/mentors
// @desc Register mentor user
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let mentor = await Mentor.findOne({ email });

      if (mentor) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      mentor = new Mentor({
        name,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      mentor.password = await bcrypt.hash(password, salt);

      await mentor.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: mentor.id
          // id that is generated for user when created
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
