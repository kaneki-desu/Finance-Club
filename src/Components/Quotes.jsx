import React from 'react';
import '../css/Quotes.css';
import { motion,animate, delay } from 'framer-motion';

const fadeINAnimationVariants={
  animate:(index)=>{
    return {
      opacity:1,y:0,
      transition:{
        ease:"easeInOut",
        duration:1*index,
      }
    }
  }
}
function Quotes({ind}) {
  return (
    <motion.div 
    variants={fadeINAnimationVariants}
    initial={{opacity:0,y:10, scale:0.75}}
    animate={{opacity:1,y:0,transition:{
      ease:"easeInOut",
      duration:1*ind,
    }}}
    duration={1.5}
    custom={ind}
    className="box origin-center  -mt-60 -ml-44 ">
      <i className="fas fa-quote-left fa2"></i>
      <div className="text">
        <i className="fas fa-quote-right fa1"></i>
        <div>
          <h3>Quote of the Day</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Quotes;
