const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const Submission = require('../models/submissions'); // Import your submission model

const codesPath = path.join(__dirname, '../codes');
const outputsPath = path.join(__dirname, '../outputs');

// Ensure output directories exist
if (!fs.existsSync(codesPath)) {
    fs.mkdirSync(codesPath, { recursive: true });
}
if (!fs.existsSync(outputsPath)) {
    fs.mkdirSync(outputsPath, { recursive: true });
}

router.post('/run', async (req, res) => {
    console.log("Request body:", req.body);
    const { user_id, problem_id, code, language } = req.body; // Use user_id from request body

    let fileName;
    let filePath;

    // Handle file naming based on language
    if (language === 'java') {
        const classNameMatch = code.match(/public\s+class\s+(\w+)/);
        if (!classNameMatch) {
            return res.status(400).json({ error: 'Invalid Java code. No public class found.' });
        }
        const className = classNameMatch[1];
        fileName = `${className}.java`;
        filePath = path.join(codesPath, fileName);
    } else {
        fileName = `${Date.now()}.${language === 'cpp' ? 'cpp' : language === 'python' ? 'py' : 'java'}`;
        filePath = path.join(codesPath, fileName);
    }

    // Write code to file
    fs.writeFileSync(filePath, code);

    let command;
    // Prepare command based on selected programming language
    if (language === 'cpp') {
        command = `g++ ${filePath} -o ${filePath.replace('.cpp', '.exe')} && ${filePath.replace('.cpp', '.exe')}`;
    } else if (language === 'python') {
        command = `python ${filePath}`;
    } else if (language === 'java') {
        const className = fileName.replace('.java', '');
        command = `javac ${filePath} && java -cp ${codesPath} ${className}`;
    }

    exec(command, async (error, stdout, stderr) => {
        let status = 'success';
        if (error) {
            status = 'error';
            console.error(`Error executing command: ${error.message}`);
            return res.status(500).json({ error: stderr || error.message });
        }

        // Create a new submission entry in the database
        const submissionData = {
            user_id: user_id, // Using the user_id received from the request
            problem_id: problem_id, // Using the problem_id received from the request
            code: code,
            language: language,
            status: status,
            test_case_passed: 'N/A', // Set based on your logic
            execution_time: 'N/A', // Set execution time if needed
            memory_used: 'N/A', // Set memory used if needed
        };

        try {
            const submission = new Submission(submissionData);
            await submission.save(); // Save to database
            res.json({ output: stdout, submissionId: submission._id }); // Return output and submission ID
        } catch (dbError) {
            console.error(`Database error: ${dbError.message}`);
            res.status(500).json({ error: 'Failed to save submission.' });
        }
    });
});

module.exports = router;
