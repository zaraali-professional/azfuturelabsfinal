import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '/src/assets/logo.jpeg';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
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

// PropTypes validation
Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // Validate that isDarkMode is a boolean
  toggleDarkMode: PropTypes.func.isRequired, // Validate that toggleDarkMode is a function
};

export default Navbar;
