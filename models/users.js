const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    // solvedProblems: {type: [String], default: []}
});

// Create user model
const User = mongoose.model('User', userSchema);

module.exports = User;
