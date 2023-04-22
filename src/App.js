import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Hero from './components/Hero.js'
import Services from './components/Services.js'
import Footer from './components/Footer.js'
import Tour from './components/Tour.js'
function App() {
  console.log('hello')
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <Services/>
      <Tour/>
      <Footer/>
    </>
  );
}

export default App;
