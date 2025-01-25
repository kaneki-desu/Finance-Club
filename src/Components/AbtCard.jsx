
import demoImg from '../images/demoImg.jpeg'
import '../css/button.css'
import React, { useEffect,useContext }from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeContext } from '../contexts/theme';
import { motion,animate, delay } from 'framer-motion';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

// import '../css/button.css'
const fadeINAnimationVariants={
  initial:{opacity:0,y:50},
  animate:(index)=>{
    return {
      opacity:1,y:0,x:0,
      transition:{
        duration:1,
        delay:0.05 * index,
      }
    }
  }
}
const AbtCard = () => {
    
      const {themeMode}=useContext(ThemeContext)
    useEffect(()=>{

        let svg=document.querySelector("#linebg");
        let path= svg.querySelector("path");
        const pathlength= path.getTotalLength()
        
        gsap.set(path,{strokeDasharray:pathlength});
        
        gsap.fromTo(
            path,{strokeDashoffset:pathlength},
            {   
                strokeDashoffset:0,
                duration:10,
                ease:"none",
                scrollTrigger:{
                    trigger:".svg-container",
                    start:"top-=500 top",
                    end:"bottom bottom",
                    scrub: 1.5,
                }
            }
        )
    },[])
  return (
    <>
    <motion.div 
    variants={fadeINAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once:true,
    }}
    custom={1}
    className='grid w-full grid-cols-2  mobile:flex-col mobile:flex mobile:gap-20'>
        <motion.div 
        
        className="topology pl-16 pr-2  flex flex-col text-left gap-5 mobile:text-center mobile:pl-4 mobile:pr-4">
            <div className="text-5xl ">About Us</div>
            <div className="para text-xl">The Finance & Investment Club, NIT Silchar is a platform for students to explore and learn the world of finance and investment. We organize beginner-friendly sessions, workshops, and talks from industry experts and alumni, creating a collaborative environment for all finance enthusiasts, regardless of prior experience.</div>
            {/* You have to make reactive component with the user,position: absolute(wrap it under a relative component so the place reamins the same) then use zindex>> than zIndex of svg */}
            <div className="relative">
            <motion.button
             variants={fadeINAnimationVariants}
             initial={{opacity:0}}
             whileInView="animate"
             viewport={{
               once:true,
              }}
              custom={20}
              
              className={`${themeMode=='dark'? "button-54-dark":"button-54"}  w-48 absolute  mobile:relative z-10`} role="button">Know More
            </motion.button>
              </div>

        </motion.div>
        <motion.div
        variants={fadeINAnimationVariants}
        initial={{opacity:0,x:50}}
        whileInView="animate"
        viewport={{
          once:true,
        }}
        custom={20}
         className="abtpic ">
        {/* <div className='imgsample'></div> */}
        <img src={demoImg} alt="" className='ml-5 mobile:ml-0 object-cover object-center h-5/6' />
        </motion.div>
    </motion.div>
    <div className="svg-container mobile:hidden -mt-10 absolute top-0 left-0 object-contain " style={{height:"2447px"}}>
    <svg 
    id='linebg'
    className='w-screen h-full z-0'
    viewBox="0 0 1400 2447"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
<path d="M1327 14H84C60.6667 10.6666 14 23.9 14 103.5C14 103.5 14 366.5 14 434C14 501.5 14 501.5 84 501.5H501.5C501.5 501.5 571 489 571 543.5C571 598 571 563 571 610.5C571 658 571 658 501.5 658C432 658 121.5 658 84 658C46.5 658 14 700 14 730C14 760 14 1025.5 14 1055.5C14 1085.5 34 1138 84 1138C134 1138 1046 1138 1148 1138C1250 1138 1250 1165 1250 1249.5C1250 1334 1250 1523.5 1250 1593C1250 1662.5 1250 1662.5 1148 1662.5C1046 1662.5 1098 1662.5 1018.5 1662.5C939 1662.5 939 1727 939 1727C938.597 1831.26 939 1821.5 849.5 1821.5C760 1821.5 165.5 1821.5 106 1821.5C46.5 1821.5 14 1856.5 14 1903.5C14 1950.5 14 2244 14 2338.5C14 2433 14 2433 106 2433C198 2433 1476 2433 1476 2433" stroke="url(#paint0_linear_324_118)" stroke-width="27" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_324_118" x1="745" y1="13.5388" x2="745" y2="2433" gradientUnits="userSpaceOnUse">
{themeMode==='light'?(<>
<stop stop-color="#f4f3f3"/>
<stop offset="0.29" stop-color="#BFBFBF"/>
<stop offset="0.43" stop-color="#808080"/>
<stop offset="1"/>
</>):(<>
  <stop stop-color="#000"/>
{/* <stop offset="0.57" stop-color="#808080"/>
<stop offset="0.73" stop-color="#BFBFBF"/> */}
<stop offset="1" stop-color="#f4f3f3"/>
</>)}
</linearGradient>
</defs>
</svg>

    </div>
    </>

  )
}

export default AbtCard