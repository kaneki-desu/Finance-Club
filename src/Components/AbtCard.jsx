import React from 'react'
import demoImg from '../images/demoImg.jpeg'
import '../css/button.css'
const AbtCard = () => {
  return (
    <div className='grid w-full grid-cols-2'>
        <div className="topology pl-16 pr-2 flex flex-col text-left gap-5">
            <div className="text-5xl pl-6">About Us</div>
            <div className="para text-xl">The Finance & Investment Club, NIT Silchar is a platform for students to explore and learn the world of finance and investment. We organize beginner-friendly sessions, workshops, and talks from industry experts and alumni, creating a collaborative environment for all finance enthusiasts, regardless of prior experience.</div>
            <button class="button-54 w-48" role="button">Know More</button>

    </div>
        <div className="abtpic">
        {/* <div className='imgsample'></div> */}
        <img src={demoImg} alt="" className='ml-5 object-cover object-center h-5/6' />
        </div>
    </div>
  )
}

export default AbtCard