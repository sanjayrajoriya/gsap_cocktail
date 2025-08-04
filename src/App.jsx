import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText); // Register the plugins

const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>    
    <Cocktails/>
   </main>
  )
}

export default App