import React, { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence ,useScroll} from 'framer-motion';
import ThemeBtn from './ThemeBtn';
import { ThemeContext } from '../contexts/theme';
import BlackLogo from "../images/black-logo.png"
import WhiteLogo from "../images/white-logo.png"
import '../css/Topnavbar.css'
import { CircleX, X } from 'lucide-react';
function Navbar() {
  const [LogoImg,setLogoImg]= useState(BlackLogo)
  const {themeMode}=useContext(ThemeContext)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrollY, setScrollY] = useState(0);

  // Update scrollY whenever the user scrolls
  useEffect(() => {
    const handleVscroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleVscroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleVscroll);
    };
  }, []);

  useEffect(()=>{
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector('.header__fake');
      
      if (scroll > 20) {
        header.classList.add('animatedsvg');
        header.classList.remove('fix');
      } else {
        header.classList.remove('animatedsvg');
        header.classList.add('fix');
      }
    };
    window.addEventListener('scroll', handleScroll);
    themeMode==="light"?setLogoImg(BlackLogo):setLogoImg(WhiteLogo)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[themeMode])
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div id='navbar' className="z-[50000] mobile:hidden mobile:absolute sticky top-0 mt-6 flex flex-col justify-center  w-screen">

    <div className={` top-0 shadowNav -mt-4  w-4/5 flex items-center gap-10 justify-between px-5 py-3  m-auto  rounded-3xl z-30 bg-opacity-5  ${themeMode==='dark' ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-80'} `} style={{}}>
        <section className='nav-left flex justify-center items-center gap-1'>
          <div className="size-16 flex items-center">
          <Link to="/" >
        <img src={LogoImg} alt="Logo" className='' />
          </Link>
          </div>
        <div className='flex flex-col justify-start text-left text-sm'><p className='inline '>FINANCE & INVESTMENT CLUB </p>
              <p>NIT SILCHAR</p>
        </div>
        </section>
        <ul className='flex gap-6 text-2xl'>
        <Link to="/" className='NavUnderline'>Home</Link>
        <Link to="/events" className='NavUnderline'>Events</Link>
        <Link to="/blog" className='NavUnderline'>Blog</Link>
        <Link to="/team" className='NavUnderline'>Team</Link>
        <ThemeBtn />
        </ul>
    </div>
    </div>
    <div id='navbar' className="z-40 pc:hidden pc:absolute  sticky top-10 flex flex-col justify-center  w-screen">

    <div className={`top-0 content  w-full flex items-center gap-10 justify-between px-5 py-3  m-auto  rounded-3xl z-30 bg-opacity-5  ${themeMode==='dark' ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-80'} `} style={{}}>
  
<div class={`header__fake flex justify-between items-center w-full  ${themeMode==='dark' ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-80'} `}>
{/* <div className="size-14 flex items-center">
        <Link to="/" >
        <img src={LogoImg} alt="Logo" className='scale-x-110' />
        </Link>
      </div> */}
    <div className='flex gap-1 px-2 items-center'>
      <p className='logoBefore text-xl font-bold'><Link to="/" >
        <img src={LogoImg} alt="Logo" className='w-28' />
        </Link></p></div>
      <div class="icn__wrap " onClick={toggleMenu}>
          <i class="icn__hamburger"></i>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="58px" height="58px" viewBox="0 0 16 16" preserveAspectRatio="none">
              <circle cx="8" cy="8" r="6.215" transform="rotate(90 8 8)"></circle>
          </svg>
      </div>
      <i class="btm__border"></i>
    </div>
    </div>
    </div>
    <AnimatePresence > 
      {isOpen && (
         <motion.div className="sidebar  pc:hidden absolute top-0 flex  z-50 m-auto p-auto h-full "
         initial={{x:'-100%', opacity:1}}
         animate={{x:'-100px', opacity:1}}
         transition={{type:"spring",stiffness:80, duration:1}}
         >
        <motion.div className='flex flex-col shadowNav sticky text-2xl items-center h-screen gap-20 pt-10 w-screen bg-black ' style={{background:themeMode==='dark'?'#000':'#fff'}}
        initial={{x:'-100%',y:scrollY, opacity:1}}
        animate={{x:'0px',y:scrollY, opacity:1}}
         exit={{x:'200%', opacity:1 }}
         transition={{
          type:"easeIn",
          x: { duration: 0.5 }, // Smooth transition for x
          y: { duration: 0, ease:"linear" },   // Instant transition for y
        }}
        >
            <div  className='flex items-center gap-16 -mb-10 pl-32' onClick={toggleMenu}>
            <Link to="/"><img src={LogoImg} alt="Logo" className='h-14 ' /></Link>
            <div ><X size={52}/></div>
          </div>
            <Link to="/" className='NavUnderline ' onClick={toggleMenu}>Home</Link>
            <Link to="/events" className='NavUnderline' onClick={toggleMenu}>Events</Link>
            <Link to="/blog" className='NavUnderline' onClick={toggleMenu}>Blog</Link>
            <Link to="/team" className='NavUnderline' onClick={toggleMenu}>Team</Link>
            <ThemeBtn />
        </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
   
    

    </>

  );
}

export default Navbar;
