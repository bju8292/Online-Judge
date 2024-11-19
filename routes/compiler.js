const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const codesPath = path.join(__dirname, '../codes');
const outputsPath = path.join(__dirname, '../outputs');

// Ensure output directories exist
if (!fs.existsSync(codesPath)) {
    fs.mkdirSync(codesPath, { recursive: true });
}
if (!fs.existsSync(outputsPath)) {
    fs.mkdirSync(outputsPath, { recursive: true });
}

router.post('/run', (req, res) => {
    const { code, language } = req.body;

    let fileName;
    let filePath;

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
    if (language === 'cpp') {
        command = `g++ ${filePath} -o ${filePath.replace('.cpp', '.exe')} && ${filePath.replace('.cpp', '.exe')}`;
    } else if (language === 'python') {
        command = `python ${filePath}`;
    } else if (language === 'java') {
        const className = fileName.replace('.java', '');
        command = `javac ${filePath} && java -cp ${codesPath} ${className}`;
    }

    // Log the command for debugging purposes
    console.log(`Executing command: ${command}`);

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return res.status(500).json({ error: stderr || error.message });
        }

        // Log the output and errors for debugging
        console.log('Command output:', stdout);
        console.error('Command error output:', stderr);

        res.json({ output: stdout });
    });
});


module.exports = router;
