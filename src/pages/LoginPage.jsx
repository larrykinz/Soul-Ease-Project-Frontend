import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      
      const response = await axios.post('http://localhost:8082/api/user/login-user', formData);

      if (response.data.success) {
        
        navigate('/dashboard');  
      } else {
     
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
      <p className="switch-to-signup">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginPage;
