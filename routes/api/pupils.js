const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const Pupil = require('../../models/PupilUser');

// @route POST api/pupils
// @desc Register pupil user
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
      let pupil = await Pupil.findOne({ email });

      if (pupil) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      pupil = new Pupil({
        name,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      pupil.password = await bcrypt.hash(password, salt);

      await pupil.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: pupil.id
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
