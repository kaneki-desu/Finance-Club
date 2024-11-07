import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';
import { ThemeContext } from '../contexts/theme';
import BlackLogo from "../images/black-logo.png"
import WhiteLogo from "../images/white-logo.png"

function Navbar() {
  const [LogoImg,setLogoImg]= useState(BlackLogo)
  const {themeMode}=useContext(ThemeContext)
 
  useEffect(()=>{
    themeMode==="light"?setLogoImg(BlackLogo):setLogoImg(WhiteLogo)
  },[themeMode])
  return (
    <div className={`shadowNav  absolute-center w-4/5 flex items-center gap-10 justify-between px-5 py-1 m-auto  rounded-b-3xl z-30 bg-opacity-5 -mt-1 ${themeMode==='dark' ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-80'} `} style={{}}>
        <section className='nav-left flex justify-center items-center gap-4'>
        <img src={LogoImg} alt="Logo" className='size-14' />
        <div className='flex flex-col justify-start text-left text-sm'><p className='inline '>FINANCE & INVESTMENT CLUB </p>
              <p>NIT SILCHAR</p>
        </div>
        </section>
        <ul className='flex gap-4 '>
        <Link to="/" className='NavUnderline'>Home</Link>
        <Link to="/about" className='NavUnderline'>About</Link>
        <Link to="/events" className='NavUnderline'>Events</Link>
        <Link to="/sponser" className='NavUnderline'>Sponser</Link>
        <Link to="/blog" className='NavUnderline'>Blog</Link>
        <ThemeBtn />
        </ul>
    </div>
  );
}

export default Navbar;
