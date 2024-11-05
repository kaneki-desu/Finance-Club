import '../src/css/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sponsor from './pages/Sponser';
import Events from './pages/Events';
import Blog from './pages/Blog';
import React, { useEffect, useState } from 'react';



function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sponsor" element={<Sponsor/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
