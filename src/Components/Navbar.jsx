import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';

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
    <nav className={` shadow-lg shadow-[--text-primary] sticky w-3/5 flex items-center gap-10 justify-between px-10 p-5 m-auto  rounded-b-2xl -top-4 z-50 -mt-1 ${isShrunk ? 'shrink' : ''} `}>
        <div className='flex flex-col justify-start text-left'><p>FINANCE CLUB & INVESTMENT CLUB </p>
              <p>NIT SILCHAR</p>
        </div>
        <ul className='flex gap-4 '>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/sponser">Sponser</Link>
        <Link to="/blog">Blog</Link>
        <ThemeBtn/>
        </ul>
    </nav>
  );
}

export default Navbar;
