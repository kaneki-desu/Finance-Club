import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/theme';
import '../css/Messages.css'
import { fadeIn } from './fadeInAnimation';
import { motion} from 'framer-motion';

const fadeINAnimationVariants={
  initial:{opacity:0,y:50,filter:"blur(10px)"},
  animate:(index)=>{
    return {
      opacity:1,y:0,x:0,filter:"blur(0px)",
      transition:{
        duration:1,
        delay:0.05 * index,
      }
    }
  }
}
const Message = () => {
  const {themeMode}=useContext(ThemeContext)
  return (
    <motion.div
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
    viewport={{
      once:true,
    }}
    // custom={ind}
    >
        <div className="flex  flex-wrap items-center justify-end gap-10 md:gap-20 pc:mt-28 pc:w-7/12 mobile:w-full  pc:ml-20 pc:h-[400px] mobile:h-full" style={{marginBottom:'200px'}}>
        <div className="messageBox w-full h-full p-5   ">
            <div className={`${themeMode==='dark'?'glassMorphD':'glassMorphL'} h-full w-full hover:shadow-xl hover:shadow-purple-900 hover:duration-1000 duration-1000 hover:ease-in-out hover:scale-105`}>

          <div className="messageText p-5 flex flex-col gap-5">
            <p className="text-5xl font-semibold" >Our Mission</p>
            <p className="text-xl drop-shadow-xl ">
            At Finance Club, we believe that financial literacy is the key to achieving financial freedom. Our team of experts is dedicated to providing you with accurate, up-to-date, and actionable insights to help you navigate the complex world of finance.
            </p>
            <p className="text-xl drop-shadow-xl "> Whether you're a seasoned investor or just starting your financial journey, we're here to guide you every step of the way.</p>
          </div>
          </div>

          </div>
        </div>
    </motion.div>
  )
}

export default Message