const express = require('express');
const router = express.Router();
const User = require('./user');  
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log('Registering user:', username); //log

    try {
        let user = await User.findOne({ username });
        if (user) {
            console.log('User already exists'); //log
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({ username, password });

        await user.save();
        console.log('User saved successfully'); //log
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error); //log
        res.status(500).json({ message: 'Error registering user' });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Login attempt for:', username); //log

    try {
        const user = await User.findOne({ username });
        if (!user) {
            console.log(`No user found for username: ${username}`);
            return res.status(400).json({ message: 'User not found' });
        }

        console.log(`User found: ${user.username}`);
        console.log(`Submitted password: ${password}`);
        console.log(`Stored hash: ${user.password}`);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password does not match');
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        console.log('JWT token generated:', token);


        res.json({ token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
