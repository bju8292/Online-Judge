const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    Difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    input_format: { type: String },
    output_format: { type: String },
    examples: [
        {
            input: { type: String, required: true },  
            output: { type: String, required: true }  
        }
    ],
    constraints: { type: String }  // Constraints can be a string
});

const  MyProblemModel = mongoose.model('Problem', problemSchema);

module.exports =  MyProblemModel;
