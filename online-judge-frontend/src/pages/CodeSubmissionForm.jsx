import React, { useState } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams for accessing URL parameters
import axios from 'axios';
import Editor from "@monaco-editor/react";
import { ClipLoader } from 'react-spinners'; // Import the spinner

const CodeSubmissionForm = () => {
    const { id } = useParams(); // Get the problemId from the URL
    const [code, setCode] = useState(`print("Hello, World!")`);
    const [language, setLanguage] = useState('python');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false); // State for spinner
    const [error, setError] = useState(null); // State for error handling

    const handleSubmit = async () => {
        setLoading(true); // Start loading when submit is clicked
        setError(null); // Clear any previous errors

        const userId = localStorage.getItem('userId'); // Fetch userId from localStorage
        console.log('User ID:', userId);
        console.log('Problem ID:', id);

        if (!userId) {
            console.error('User ID is null, please log in again.');
            return; // Exit if userId is null
        }
        try {
            const response = await axios.post('http://localhost:3000/api/run', {
                user_id: userId,     // Send userId
                problem_id: id,   // Send problemId dynamically from URL
                code,         // The code written in the editor
                language,     // The selected programming language
                result: output // Result from the code execution (optional if needed)
            });
            console.log('Response from API:', response);
            setOutput(response.data.output);
        } catch (error) {
            console.error('Error submitting code:', error);
            setError('Failed to submit the code. Please try again.'); // Set error message
        } finally {
            setLoading(false); // Stop loading after submission
        }
    };

    const resetForm = () => {
        setCode('');
        setOutput('');
        setError(null);
    };

    return (
        <div className="container p-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-3 text-2xl text-gray-300"><strong>Submit Your Code</strong></h1>
                <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                </select>

                <div className="mt-4">
                    <Editor
                        height="400px"
                        width="800px"
                        defaultLanguage={language}
                        value={code}
                        onChange={(value) => setCode(value)}
                        theme="vs-dark"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center mt-2">
                <button onClick={handleSubmit} type="button" className="mt-2 text-center inline-flex items-center text-black bg-gradient-to-br from-green-600 to-green-200 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  transition: all 0.3s ease-in-out">
                    <strong>Run</strong></button>

                <button onClick={resetForm} type="button" className="mt-2 text-center inline-flex items-center text-black bg-gradient-to-br from-rose-600 to-rose-200 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    <strong>Reset</strong></button>
            </div>
            {/* Spinner */}
            {loading && <ClipLoader color="#36d7b7" size={50} />}

            {/* Output */}
            {output && (
                <div className="mt-4 text-white bg-gray-800 p-4 rounded">
                    <h2 className="text-xl font-semibold">Output:</h2>
                    <pre>{output}</pre>
                </div>
            )}

            {/* Error */}
            {error && <p className="text-white mt-4">{error}</p>}
        </div>
    );
};

export default CodeSubmissionForm;
