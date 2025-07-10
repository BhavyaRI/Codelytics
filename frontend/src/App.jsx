import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CodeforcesUser from './components/codeforces';
import UpcomingContestsPage from './components/UpcomingContestsPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<CodeforcesUser />} />
        <Route path="/analysis" element={<h1>Performance Analysis</h1>} />
        <Route path="/resources" element={<h1>Resources</h1>} />
        <Route path="/contests/upcoming" element={<UpcomingContestsPage />} />
        <Route path="/" element={<CodeforcesUser />} />
      </Routes>
    </>
  );
}

export default App;