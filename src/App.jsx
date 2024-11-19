import Aboutus from './Components/Aboutus/Aboutus'
import Hero from './Components/hero/hero'
import Navbar from './Components/Navbar/Navbar'
import Solutions from './Components/Solutions/Solutions'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Solutions/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App 