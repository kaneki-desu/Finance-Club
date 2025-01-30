import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import React from 'react'

const fadeINAnimationVariants={
    initial:{opacity:0,x:-1000},
    animate:(index)=>{
      return {
        opacity:1,y:0,x:-75*index,
        scale:1+0.02*index,
        transition:{
          duration:1,
          delay:0.3 * index,
        }
      }
    }
  }
const Sponsers = () => {
    const images=["../src/images/Fin_farewell.jpg","../src/images/Fin_horizontal.jpg"]
  return (
    <div class="flex  flex-wrap items-center justify-end gap-10 md:gap-20 pc:mt-10" style={{height:"550px", width:"80vw"}}>
        <motion.div
        variants={fadeINAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
         }}
         custom={0}
         className='absolute flex justify-center items-center rounded-md border-8 overflow-clip border-gray-600' style={{width:"540px", height:"408px"}}>
            <img src={images[0]} alt="" />
        </motion.div>
        <motion.div
        variants={fadeINAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
         }}
         custom={5}
          className='absolute  flex justify-center items-center rounded-md border-8 overflow-clip border-gray-600' style={{width:"540px", height:"408px", z:1}}>
            <img src={images[1]} alt="" />
        </motion.div>
        <motion.div
        variants={fadeINAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
         }}
         custom={10}
          className='absolute  flex justify-center items-center rounded-md border-8 overflow-clip border-gray-600' style={{width:"540px", height:"408px", z:2}}>
            <img src={images[1]} alt="" />
        </motion.div>
        Our Partners
    </div>
  )
}

export default Sponsers