import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';
import Navbar from './components/Navbar.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText); // Register the plugins

const App = () => {
  return (
   <main>
    <Navbar/>
   </main>
  )
}

export default App