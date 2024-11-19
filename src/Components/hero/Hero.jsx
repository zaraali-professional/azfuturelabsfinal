import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
          Empowering Businesses with <span className='gradient-text'>AI</span>
        </h1>
        <p>
          Revolutionizing operations through automation and virtual assistance for commercial, marketing, and operational tasks.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div>
  );
};

export default Hero;
