import PropTypes from 'prop-types'; // Import PropTypes
import './Footer.css';  // Ensure this path is correct for your project

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`footer ${isDarkMode ? 'dark-footer' : 'light-footer'}`}>
      <div className="footer-content">
        <p>&copy; 2024 <strong>azfuturelabs</strong>. All rights reserved.</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, 
};

export default Footer;
