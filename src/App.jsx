import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/theme.css'

import '../src/css/App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sponsor from './pages/Sponsor';
import Events from './pages/Events';
import Blog from './pages/Blog';
import React, { useEffect, useState } from 'react';
import { DarkModeToggle } from './Components/toggle';



function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false);

  React.useEffect(() =>{
    document.body.style.backgroundColor = isDark ? "#121212" : "#ffffff";
    document.body.style.color = isDark? "#ffffff" : "#000000";
  }, [isDark]);

  return (
    <div className={'app ${isDark ? "dark-mode":"light-mode"}'}>
      <BrowserRouter>
        <Navbar>
           <DarkModeToggle isDark={isDark} setIsDark={setIsDark}/> 
        </Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sponsor" element={<Sponsor/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
