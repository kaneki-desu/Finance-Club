import React, { useContext, useEffect, useState } from 'react'
import TextUpDown from '../Components/TextUpDown';
import AbtCard from '../Components/AbtCard';
import BlackBg from '../images/black-bg.jpeg'
import LightBg from '../images/light-bg.png'
import { ThemeContext } from '../contexts/theme';
import ParticleBackground from '../Components/Particle';
import TimelineStep from '../Components/Timeline';
import Message from '../Components/Message';
import Sponsers from '../Components/Sponsors';
import { motion } from 'framer-motion';
import AnimatedWrapper from '../Components/AnimatedWrapper';
import withAnimation from '../Components/WithAnimation';

 '../Components/Timeline';
const Home = () => {
  const [bgImg,setBgImg]= useState(BlackBg)
  const {themeMode}=useContext(ThemeContext)
 
  useEffect(()=>{
    themeMode==="dark"?setBgImg(BlackBg):setBgImg(LightBg)
  },[themeMode])

  return (
    <>
         <ParticleBackground  id='particle' />
      {/* <div className=' h-screen bg-cover object-center bg-no-repeat' style={{padding:"15vw 10vw", 
        backgroundImage:`url(${bgImg})` }} >  */}
          {/* <div className='h-screen w-full absolute top-0 left-0 -z-1' style={{backgroundImage: "linear-gradient(black,transparent,transparent ,black)"}}></div> */}
          <TextUpDown />
      {/* </div> */}
      <div className='relative h-full w-full bg-opacity-80 '>
        <AbtCard/>
        <TimelineStep/>
        <Message/>
        <Sponsers/>
      </div>

    </>
  )
}

export default (Home)