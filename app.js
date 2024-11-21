const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import auth routes
const compilerRoutes = require('./routes/submission');
const problemsRoutes = require('./routes/problems');// Import submission routes
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api', compilerRoutes);     // All authentication routes
//app.use('/api/submission1/index', submissionRoutes); // All submission routes
app.use('/api', require('./routes/problems')); // Import and use problems route

// Basic route to test server
app.get('/', (req, res) => {
    res.send('Online Judge Platform Backend');
});

module.exports = app;
