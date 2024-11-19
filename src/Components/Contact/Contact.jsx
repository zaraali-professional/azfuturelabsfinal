import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/address-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'd4152b40-f7ac-4755-8a77-ac141aa64722');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className={`contact ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="contact-header">
        <h2 className="contact-us">Contact Us</h2>
        <h3 className="get-in-touch">Get in touch</h3>
      </div>
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service at our
          company.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail Icon" /> makali0812@yahoo.co.in, ziyaad6788@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" /> 00966537302222, 00919849789368
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" /> Heera nagar colony pillar no-208
            Rajendranagar, HYDERABAD-500048 TELANGANA, INDIA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="Submit Arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

// PropTypes validation
Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // Ensure isDarkMode is a boolean and is required
};

export default Contact;
