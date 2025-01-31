import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import '../index.css';

const LandingPage = () => {
  const navigate = useNavigate(); 

  
  const handleGetStarted = () => {
    navigate('/SignUp'); 
  };

  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="title">SoulEase</h1>
        <p className="subtitle">Your Companion for Mental Wellness</p>
      </header>

      <main className="main-content">
        {/* <img
          src="https://via.placeholder.com/400x250.png?text=Mental+Wellness+Matters"
          alt="Mental Wellness"
          className="hero-image"
        /> */}
        <h2 className="main-heading">
          Empowering You to Achieve Mental Stability
        </h2>
        <p className="description">
          At SoulEase, we connect you with experienced therapists and provide tools to manage your mood and mental well-being. Let's take the first step toward a better you, together.
        </p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </main>

      <footer className="footer">
        <p className="footer-text">&copy; 2025 SoulEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
