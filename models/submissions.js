const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, // Reference to MongoDB's default _id
        required: true, 
        ref: 'User' // Reference to the User model
    },
    problem_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Problem' // Reference to the Problem model
    },
    code: { 
        type: String, 
        required: true 
    },
    language: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    },
    test_case_passed: { 
        type: String, 
        required: true 
    },
    execution_time: { 
        type: String, 
        default: "N/A" 
    },
    memory_used: { 
        type: String, 
        default: "N/A" 
    },
    submission_time: { 
        type: Date, 
        default: Date.now 
    },
    result: { 
        type: String 
    }
});

// Create Submission model
const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
