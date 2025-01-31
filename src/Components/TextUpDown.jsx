import React, { useContext, useEffect, useState } from 'react'
import '../css/TextUpDown.css'
import { BadgeIndianRupee } from 'lucide-react';
import WmoneySVG from '../images/moneySVG-negate-unscreen.gif'
import BmoneySVG from '../images/moneySVG-unscreen.gif'
import { ThemeContext } from '../contexts/theme';
const TextUpDown = () => {
  const [bgImg,setBgImg]= useState(WmoneySVG)
    const {themeMode}=useContext(ThemeContext)
   
    useEffect(()=>{
      themeMode==="dark"?setBgImg(WmoneySVG):setBgImg(BmoneySVG)
    },[themeMode])
  return (
    <div className='relative h-screen w-screen flex-col flex mobile:justify-between mobile:gap-40' style={{paddingLeft:"12vw", paddingTop:"15vw"}}>
      <div className=" flex flex-col justify-start items-start mb-4 text-4xl font-bold tracking-tighter -mt-32 sm:text-5xl lg:text-6xl xl:text-7xl">
      <h1 class="mb-4 text-4xl font-bold tracking-tighter  sm:text-5xl lg:text-6xl xl:text-7xl">Finance & Investment Club</h1>
      <p class="mb-8 text-lg tracking-tighter  sm:text-xl xl:text-3xl">NIT Silchar</p>
      </div>
      <div className="textandgif flex justify-between pr-40">
      <div className="textUpDown flex flex-col justify-center">

        <ul className='flex justify-center Minner-heading -z-1 '>
            <div >
            Create<br/>
            Prosper<br/>
            {/* <p className='bg-red-500'>Create</p><br/>
            <p className='bg-red-100'>Innovate</p><br/> */}
            <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={100} color='green' /></p> <br/>
            </div>
        </ul>
      </div>

        <img className='-mx-8 pc:scale-125' src={bgImg}></img>
      </div>


    </div>
  )
}

export default TextUpDown