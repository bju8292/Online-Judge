import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const ProblemDetails = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProblemDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/problems/${id}`); // Fetch problem details by ID
        setProblem(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching problem details:', err);
        setError('Failed to fetch problem details.');
        setLoading(false);
      }
    };

    fetchProblemDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!problem) return <div>Problem not found</div>;

  return (
    <div className="container text-white mx-auto p-4">
      <h1 className="text-2xl font-bold">{problem.title}</h1>
      <p className="mt-2 text-lime-300">{problem.description}</p>
      <h2 className="mt-4 text-xl font-semibold">Input Format</h2>
      <p className="mt-2">{problem.input_format}</p>
      <h2 className="mt-4 text-xl font-semibold">Output Format</h2>
      <p className="mt-2">{problem.output_format}</p>
      <h2 className="mt-4 text-xl font-semibold">Examples</h2>
      <ul className="mt-2 list-disc list-inside">
        {/* {problem.examples.map((example, index) => (
                    <li key={index}>
                        <strong>Input:</strong> {example.input} <br />
                        <strong>Output:</strong> {example.output}
                    </li>
                ))} */}
        {problem.examples && problem.examples.length > 0 ? (
          problem.examples.map((example, index) => (
            <li key={index}>
              <strong>Input:</strong> {example.input} <br />
              <strong>Output:</strong> {example.output}
            </li>
          ))
        ) : (
          <li>No examples available.</li>
        )}
      </ul>
      <h2 className="mt-4 text-xl font-semibold">Constraints</h2>
      <p className="mt-2">{problem.constraints}</p>
      <Link to={`/submit-code/${id}`}>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Submit Your Code
        </button>
      </Link>
    </div>
  );
};

export default ProblemDetails;