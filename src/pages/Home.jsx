import React, { useContext, useEffect, useState } from 'react'
import TextUpDown from '../Components/TextUpDown';
import AbtCard from '../Components/AbtCard';
import BlackBg from '../images/black-bg.jpeg'
import LightBg from '../images/light-bg.png'
import { ThemeContext } from '../contexts/theme';
const Home = () => {
  const [bgImg,setBgImg]= useState(BlackBg)
  const {themeMode}=useContext(ThemeContext)
 
  useEffect(()=>{
    themeMode==="dark"?setBgImg(BlackBg):setBgImg(LightBg)
  },[themeMode])
  return (
    <>
      <div className='-z-10 h-screen bg-cover object-center bg-no-repeat' style={{padding:"15vw 10vw", 
        backgroundImage:`url(${bgImg})` }} >
          {/* <div className='h-screen w-full absolute top-0 left-0 -z-1' style={{backgroundImage: "linear-gradient(black,transparent,transparent ,black)"}}></div> */}
          <TextUpDown/>
      </div>
      <div className='h-full p-5'>
        <AbtCard/>
      </div>
    </>
  )
}

export default Home