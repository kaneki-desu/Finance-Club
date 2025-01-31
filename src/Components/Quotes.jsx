import React from 'react';
import '../css/Quotes.css';
import { motion,animate, delay } from 'framer-motion';

const fadeINAnimationVariants={
  initial:{opacity:0,y:50,filter:"blur(10px)",scale:0.75},
  animate:(index)=>{
    return {
      opacity:1,y:0,filter:"blur(0px)",
      transition:{
        duration:1,
        ease:"easeInOut",
      }
    }
  }
}
// const fadeINAnimationVariants={
//   initial:{opacity:0,y:50,filter:"blur(10px)",scale:0.75},
//   animate:(index)=>{
//     return {
//       opacity:1,y:0,filter:"blur(0px)",
//       transition:{
//         ease:"easeInOut",
//         duration:1*index,
//       }
//     }
//   }
// }
function Quotes({ind,typo}) {
  return (
    <motion.div 
    variants={fadeINAnimationVariants}
    initial="initial"
    animate="animate"
    custom={ind}
    className="box origin-center mobile:-mt-72  pc:-mt-60 mobile:-ml-64 pc:-ml-44 ">
      <i className="fas fa-quote-left fa2"></i>
      <div className="text">
        <i className="fas fa-quote-right fa1"></i>
        <div>
          <h3>Quote of the Day</h3>
          <p>
            {typo}
            </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Quotes;
