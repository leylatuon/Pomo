const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

//register function
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
});

//login function
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid login credentials');
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid login credentials');
    }
    const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
