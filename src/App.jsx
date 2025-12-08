import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Features from './sections/Services';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Nav from './sections/Nav';
import Partners from './sections/WhyUs';
import Reviews from './sections/Partnering';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation lasts 1s
      once: true,     // animate only once when scrolling down
      offset: 100,    // start animation 100px before element is in view
    });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Partners />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
