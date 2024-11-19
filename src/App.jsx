import { useState, useEffect } from 'react';
import Aboutus from './Components/Aboutus/Aboutus';
import Hero from './Components/hero/hero';
import Navbar from './Components/Navbar/Navbar';
import Solutions from './Components/Solutions/Solutions';
import Contact from './Components/Contact/Contact';
import Footer from './Components/footer/footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Aboutus isDarkMode={isDarkMode} />
      <Solutions isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
};

export default App;
