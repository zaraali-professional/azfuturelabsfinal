import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '/src/assets/logo.jpeg';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-nav-sticky' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Azfuturelabs Logo" />
        <span className="logo-text">Azfuturelabs</span>
      </div>
      <ul>
        <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="aboutus" smooth={true} offset={-60} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to="solutions" smooth={true} offset={-40} duration={500}>Solutions</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} offset={-60} duration={500} className="btn">Contact Us</ScrollLink></li>
        <li className="dark-mode-toggle">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

