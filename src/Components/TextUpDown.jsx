import React, { useContext, useEffect, useState } from 'react'
import '../css/TextUpDown.css'
import { BadgeIndianRupee } from 'lucide-react';
import WmoneySVG from '../images/moneySVG-negate-unscreen.gif'
import BmoneySVG from '../images/moneySVG-unscreen.gif'
import { ThemeContext } from '../contexts/theme';
import withAnimation from './WithAnimation';
const TextUpDown = () => {
  const [bgImg,setBgImg]= useState(WmoneySVG)
    const {themeMode}=useContext(ThemeContext)
   
    useEffect(()=>{
      themeMode==="dark"?setBgImg(WmoneySVG):setBgImg(BmoneySVG)
    },[themeMode])
  return (
    <>
    <div className='relative pc:hidden pc:absolute h-screen w-screen flex-col flex mobile:justify-start mobile:gap-20 px-5 mt-28' style={{ paddingTop:"15vw"}}>
      <div className="yfade-me flex flex-col justify-center  items-end mb-4 text-5xl font-bold tracking-tighter  sm:text-5xl lg:text-6xl xl:text-7xl">
      <h1 class="mb-4 text-4xl font-bold tracking-tighter  sm:text-5xl lg:text-6xl xl:text-7xl">Finance & Investment Club</h1>
      <p class="mb-8 text-lg tracking-tighter  sm:text-xl xl:text-3xl pr-10 ">- NIT Silchar</p>
      </div>
      <div className="yfade1-me textandgif flex flex-col justify-start gap-20 pr-40">
        <div className="textUpDown flex flex-col justify-end">

        <ul className=' flex justify-start Minner-heading -z-1 ml-5'>
              <div >
              Create<br/>
              Prosper<br/>
              {/* <p className='bg-red-500'>Create</p><br/>
              <p className='bg-red-100'>Innovate</p><br/> */}
              <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={80} color='green' /></p> <br/>
              </div>
          </ul>
          {/* <ul className=' Minner-heading -z-1 '>
              <div >
              Create<br/>
              Prosper<br/>
              {/* <p className='bg-red-500'>Create</p><br/>
              <p className='bg-red-100'>Innovate</p><br/> */}
              {/* <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={100} color='green' /></p> <br/>
              </div> */}
          {/* </ul> */} 
        </div>

      </div>
      <div className="yfade2-me svgCoin flex flex-col justify-center">

<img className='mx-20 -mt-20  ' src={bgImg }></img>
      </div>         

    </div>
    <div className='relative mobile:hidden mobile:absolute h-screen w-screen flex-col flex mobile:justify-between mobile:gap-40' style={{paddingLeft:"12vw", paddingTop:"15vw"}}>
      <div className="yfade-me flex flex-col justify-start items-start mb-4 text-4xl font-bold tracking-tighter -mt-32 sm:text-5xl lg:text-6xl xl:text-7xl">
      <h1 class="mb-4 text-2xl font-medium tracking-tighter  sm:text-5xl lg:text-6xl xl:text-7xl">Finance & Investment Club</h1>
      <p class="mb-8 font-thin  text-lg tracking-tighter  sm:text-xl xl:text-3xl">NIT Silchar</p>
      </div>
      <div className="yfade1-me textandgif flex mobile:flex-col justify-around pr-40">
      <div className="textUpDown flex flex-col justify-center">

      <ul className='mobile:hidden flex justify-start mobile:absolute inner-heading -z-1 '>
            <div >
            Create<br/>
            Prosper<br/>
            {/* <p className='bg-red-500'>Create</p><br/>
            <p className='bg-red-100'>Innovate</p><br/> */}
            <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={100} color='green' /></p> <br/>
            </div>
        </ul>
        {/* <ul className=' Minner-heading -z-1 '>
            <div >
            Create<br/>
            Prosper<br/>
            {/* <p className='bg-red-500'>Create</p><br/>
            <p className='bg-red-100'>Innovate</p><br/> */}
            {/* <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={100} color='green' /></p> <br/>
            </div> */}
        {/* </ul> */} 
      </div>

        <img className='-mx-8 -mt-20 pc:scale-125 yfade1-me' src={bgImg}></img>
      </div>


    </div>
    </>
  )
}

export default withAnimation(TextUpDown)