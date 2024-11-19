// routes/auth.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const Problem = require('../models/problems');
const router = express.Router();

// Registration Route
router.post('/register', [
    body('username').not().isEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: 'User already exists' });
        }

        // Create a new user
        user = new User({
            username,
            email,
            password: await bcrypt.hash(password, 10), // Hash the password
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Login Route
router.post('/login', [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').exists().withMessage('Password is required')
], async (req, res) => {
    console.log("Login request received:", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if the user exists
        let user = await User.findOne({ email });
        console.log("User found:", user);
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Use MongoDB _id instead of user_id
        console.log("User ID:", user._id);
        
        // Generate a JWT token
        const payload = {
            user: { id: user._id } // Use _id for the payload
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
        
        console.log("Response data:", { token, _id: user._id });

        // Respond with the token and user ID
        res.json({
            token,
            _id: user._id  // Ensure this userId is coming from the database
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;
