import './Aboutus.css';

const Aboutus = () => {
  return (
    <section className='aboutus'>
      <div className='about-header'>
        <h2>About Us</h2>
        <p>
          At Azfuturelabs, we are dedicated to empowering businesses with innovative AI solutions.
          Our focus is on revolutionizing operational workflows, boosting efficiency, and 
          enhancing user engagement through cutting-edge technology.
        </p>
      </div>

      <div className='about-cards'>
        <div className='about-card'>
          <div className='card-content'>
            <h3>Our Mission</h3>
            <p>
              We aim to design intelligent platforms that simplify complex processes, minimize 
              manual tasks, and boost productivity using state-of-the-art AI and machine learning solutions.
            </p>
          </div>
        </div>

        <div className='about-card'>
          <div className='card-content'>
            <h3>Our Vision</h3>
            <p>
              To lead the industry in AI-driven innovation, making powerful technology 
              accessible, practical, and beneficial for organizations of every size and sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
