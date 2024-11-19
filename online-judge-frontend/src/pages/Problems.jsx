import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageStart, setPageStart] = useState(1);
  const problemsPerPage = 5;
  const visiblePagesCount = 2;

  // Fetch problems from backend API
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/problems');
        setProblems(response.data);  // Assuming your backend returns an array of problems
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, []);

  // Filter problems based on search query
  const filteredProblems = problems.filter(problem =>
    problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    problem.Difficulty.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Logic for pagination
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePreviousRange = () => {
    if (pageStart > 1) {
      setPageStart(prevStart => prevStart - visiblePagesCount);
    }
  };

  const handleNextRange = () => {
    if (pageStart + visiblePagesCount - 1 < totalPages) {
      setPageStart(prevStart => prevStart + visiblePagesCount);
    }
  };

  const visiblePages = Array.from(
    { length: Math.min(visiblePagesCount, totalPages - pageStart + 1) },
    (_, index) => pageStart + index
  );

  return (
    <div className="container mx-auto p-4 text-slate-700">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search problems by title or difficulty..."
        className="mt-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Problems Table */}
      <table className="min-w-full mt-6 border border-gray-300">
        <thead>
          <tr className="bg-slate-700 text-gray-50">
            <th className="border px-4 py-2 text-left font-bold">Problems Title</th>
            <th className="border px-4 py-2 text-left font-bold">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {currentProblems.map((problem) => (
            <tr key={problem.id}>
              <td className="border px-4 py-2">
                <a href={`/problems/${problem._id}`} className="text-stone-50 hover:text-white hover:font-bold transition-colors duration-300">
                  {problem.title}
                </a>
              </td>
              <td className="text-gray-300 border px-4 py-2">{problem.Difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={handlePreviousRange}
          disabled={pageStart === 1}
          className={`px-4 py-2 mx-1 border rounded ${
            pageStart === 1 ? 'bg-slate-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-500'
          }`}
        >
          Previous
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={`px-4 py-2 mx-1 border ${
              currentPage === page ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-500 hover:text-white'
            } border-blue-600 rounded`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNextRange}
          disabled={pageStart + visiblePagesCount - 1 >= totalPages}
          className={`px-4 py-2 mx-1 border rounded ${
            pageStart + visiblePagesCount - 1 >= totalPages ? 'bg-slate-700 text-stone-50' : 'bg-blue-600 text-white hover:bg-blue-500'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Problems;
