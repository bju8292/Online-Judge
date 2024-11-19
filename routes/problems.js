const express = require('express');
const Problem = require('../models/problems'); // Import your Problem model
const router = express.Router();

// Get all problems
router.get('/problems', async (req, res) => {
    try {
        const problems = await Problem.find(); // Fetch all problems from the database
        res.json(problems); // Respond with the problems array
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
// Fetch a specific problem by ID
router.get('/problems/:id', async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id); // Fetch problem by ID
    if (!problem) {
      return res.status(404).send('Problem not found');
    }
    res.send(problem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
// POST request to add a new problem
router.post('/problems', async (req, res) => {
   
  const { title, Difficulty, description, input_format, output_format, examples, constraints } = req.body;

  try {
            // Check that examples is an array and validate each example
            if (!Array.isArray(examples)) {
            return res.status(400).json({ error: "Examples should be an array" });
        }

        // Loop through examples and validate each one
        for (let i = 0; i < examples.length; i++) {
            const example = examples[i];
            if (!example.input || !example.output) {
                return res.status(400).json({ error: `Example ${i + 1} is missing 'input' or 'output'` });
            }
        }
      const newProblem = new Problem({ title, Difficulty, description, input_format, output_format, examples, constraints });
      await newProblem.save();
      res.status(201).json(newProblem);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
