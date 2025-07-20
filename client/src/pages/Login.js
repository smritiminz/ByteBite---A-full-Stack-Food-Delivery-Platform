import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
        
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
          )}
          
          <button type="submit" className="auth-btn">
            {isSignUp ? (
              <>
                <i className="fas fa-user-plus"></i> Create Account
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i> Sign In
              </>
            )}
          </button>
        </form>
        
        <div className="auth-link">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <a href="#" onClick={() => setIsSignUp(false)}>
                Sign In
              </a>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={() => setIsSignUp(true)}>
                Sign Up
              </a>
            </p>
          )}
        </div>

        <div className="auth-link">
          <Link to="/">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
