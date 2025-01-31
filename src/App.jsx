import LandingPage from './pages/landingPage'; 
import SignUpPage from './pages/SignUpPage';
import React from 'react';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} /> 
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;






