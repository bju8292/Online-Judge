import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <nav className="bg-slate-950 p-4 text-white border border-slate-500">
       <ul className="flex space-x-4 items-center ">
        <img width="70" height="50" src="https://onlinejudge.org/templates/hm_yaml_2_5/img/ojlogo2.svg.png" alt="image not found" />
        <h1 className="text-2xl font-bold">Online Judge</h1>
        <li><Link to="/home" className="hover:text-red-300 hover:font-bold transition-colors duration-300">Home</Link></li>
        <li><Link to="/login" className="hover:text-emerald-400 hover:font-bold transition-colors duration-300">Login</Link></li>
        <li><Link to="/register" className="hover:text-fuchsia-600 hover:font-bold transition-colors duration-300">Register</Link></li>
        <li><Link to="/problems" className="hover:text-violet-300 hover:font-bold transition-colors duration-300">Problems</Link></li>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">Logout </button>
      </ul>
    </nav>
  );
};

export default Navbar;
