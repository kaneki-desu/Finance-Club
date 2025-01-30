import React from 'react'
import '../css/TextUpDown.css'
import { BadgeIndianRupee } from 'lucide-react';
import moneySVG from '../images/moneySVG-white.gif'
const TextUpDown = () => {
  return (
    <div className='relative h-screen w-screen flex-col flex mobile:justify-start' style={{paddingLeft:"12vw", paddingTop:"15vw"}}>
        <ul className='mobile:hidden mobile:absolute inner-heading -z-1 '>
            <div >
            Create<br/>
            Prosper<br/>
            {/* <p className='bg-red-500'>Create</p><br/>
            <p className='bg-red-100'>Innovate</p><br/> */}
            <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={100} color='green' /></p> <br/>
            </div>
        </ul>
        <ul className='pc:hidden pc:absolute Minner-heading -z-1 '>
            <div >
            Create<br/>
            Prosper<br/>
            {/* <p className='bg-red-500'>Create</p><br/>
            <p className='bg-red-100'>Innovate</p><br/> */}
            <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={100} color='green' /></p> <br/>
            </div>
        </ul>
        <img src={moneySVG}></img>

    </div>
  )
}

export default TextUpDown