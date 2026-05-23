import { useEffect } from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-[#020202] min-h-screen text-white font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      <Loader />
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
