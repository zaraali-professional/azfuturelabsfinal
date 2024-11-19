import './Solutions.css';
import image1 from '../../assets/image-1.jpg';
import image2 from '../../assets/image-voice.jpg';
import image3 from '../../assets/image-data.jpeg';
import icon1 from '../../assets/icon-chatbot.png'; 
import icon2 from '../../assets/icon-voice.png'; 
import icon3 from '../../assets/icon-data.png'; 

const Solutions = () => {
  return (
    <div className='solutions'>
      <h2>Our Solutions</h2>
      <p>At Azfuturelabs, we focus on developing cutting-edge AI solutions that automate processes and provide seamless virtual assistance to meet the diverse needs of our clients. Our key areas of focus include:</p>
      
      <div className='solutions-content'>
        <div className='solution-item'>
          <div className='image-container'>
            <img src={image1} alt="Chatbots" />
          </div>
          <div className='icon-container'>
            <img src={icon1} alt="Chatbot Icon" className='solution-icon' />
          </div>
          <div className='text-container'>
            <h3>Chatbots</h3>
            <p>Our intelligent chatbots are designed to offer real-time customer service and consultation, capable of handling queries efficiently and enhancing user experiences with 24/7 availability.</p>
          </div>
        </div>

        <div className='solution-item'>
          <div className='image-container'>
            <img src={image2} alt="Voice Interaction" />
          </div>
          <div className='icon-container'>
            <img src={icon2} alt="Voice Interaction Icon" className='solution-icon' />
          </div>
          <div className='text-container'>
            <h3>Voice Interaction</h3>
            <p>Our voice-based AI assistants guide users through forms, data collection, and other processes, providing a hands-free, intuitive experience.</p>
          </div>
        </div>

        <div className='solution-item'>
          <div className='image-container'>
            <img src={image3} alt="Data Analysis" />
          </div>
          <div className='icon-container'>
            <img src={icon3} alt="Data Analysis Icon" className='solution-icon' />
          </div>
          <div className='text-container'>
            <h3>Data Analysis</h3>
            <p>We leverage machine learning to analyze large datasets, extracting valuable insights and trends to inform better decision-making and strategic planning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
