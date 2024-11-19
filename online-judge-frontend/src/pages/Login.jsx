import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      console.log('Login response:', response.data);
      const { token, _id } = response.data; // Use _id instead of user_id
      localStorage.setItem('token', token); // Save JWT in localStorage
      localStorage.setItem('userId', _id);  // Save _id in localStorage
      setError('');
      navigate('/problems');
    } catch (err) {
        console.error('Error during login:', err.response?.data);
        setError(err.response.data.message || 'Invalid credentials!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
