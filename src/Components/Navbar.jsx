import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { DarkModeToggle } from './toggle';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { 
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
}


function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
    };
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? 'shrink' : ''}`}>
      <h3>Finance Club NIT Silchar</h3>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/sponser">Sponser</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="nav-toggle">
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
