import React, { useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Featured from './Components/Featured';
import Cards from './Components/Cards';
import Iye from './Components/Iye';
import Footer from './Components/Footer';

import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScrollRef = useRef();
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    locomotiveScrollRef.current = locomotiveScroll;

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Iye/>
      <Footer />
    </div>
  );
}

export default App;