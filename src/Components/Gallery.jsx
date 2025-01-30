import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const PCVariants={
    initial:{opacity:0,x:-1000},
    animate:(index)=>{
      return {
        opacity:1,y:0,x:-50*index,
        scale:1+0.02*index,
        transition:{
          duration:1,
          delay:0.3 * index,
        }
      }
    }
  }
const MobileVariants={
    initial:{opacity:0,x:-1000},
    animate:(index)=>{
      return {
        opacity:1,y:0,x:-15*index,
        scale:1+0.02*index,
        transition:{
          duration:1,
          delay:0.3 * index,
        }
      }
    }
  }
const Sponsers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);
    const images=["../src/images/Fin_farewell.jpg"
                  ,"../src/images/Fin_horizontal.jpg"
                  ,"../src/images/Fin_horizontal.jpg"
                  ,"../src/images/Fin_horizontal.jpg"
                ]
  return (
    <div class="flex  flex-wrap items-center justify-end gap-10 md:gap-20 pc:mt-10" style={{height:"550px", width:"80vw"}}>
       {images.map((src, index) => (

        <motion.div
        variants={isMobile?MobileVariants:PCVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
         }}
         custom={5*(index)}
         className='absolute flex justify-center items-center rounded-md border-8 overflow-clip border-gray-600' style={{width:"540px", height:"408px" , z:(index-1)}}>
            <img src={images[index]} alt="" />
        </motion.div>

      ))}
        
        
        {/* <motion.div
        variants={fadeINAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
         }}
         custom={10}
          className='absolute  flex justify-center items-center rounded-md border-8 overflow-clip border-gray-600' style={{width:"540px", height:"408px", z:2}}>
            <img src={images[1]} alt="" />
        </motion.div> */}
        Our Partners
    </div>
  )
}

export default Sponsers