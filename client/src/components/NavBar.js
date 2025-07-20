import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <span>FoodieExpress</span>
          </Link>

          {/* Search Bar */}
          <div className="nav-search">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Search for restaurants or dishes..."
            />
          </div>

          {/* Navigation Actions */}
          <div className="nav-actions">
            <div className="nav-btn">
              <i className="fas fa-map-marker-alt"></i>
              <span> New York, NY</span>
            </div>
            
            <Link to="/login" className="nav-btn">
              <i className="fas fa-user"></i>
              <span> Login</span>
            </Link>
            
            <Link to="/cart" className="nav-btn cart-btn">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-badge">2</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
