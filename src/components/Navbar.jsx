import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="logo">🎬 Uche Montana TV</h1>
        
        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/project" currentPath={location.pathname}>Project</NavLink>
          <NavLink to="/contact" currentPath={location.pathname}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

// Helper component for animated links
const NavLink = ({ to, currentPath, children }) => (
  <Link 
    to={to} 
    className={currentPath === to ? 'active' : ''}
  >
    {children}
    <span className="link-underline"></span>
  </Link>
);

export default Navbar;