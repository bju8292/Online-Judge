import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Problems from './pages/Problems';
import ProblemDetails from './pages/ProblemDetails';
import PrivateRoute from './components/privateRoute'; 
import CodeSubmissionForm from './pages/CodeSubmissionForm';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-500">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<ProblemDetails />} />
        <Route path="/problems" element={<PrivateRoute><Problems /></PrivateRoute>} />
        <Route path="/" element={<Problems />} />
        <Route path="/submit-code/:id" element={<CodeSubmissionForm />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
